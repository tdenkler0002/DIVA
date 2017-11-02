from django.test import TestCase
from .models import User
from rest_framework.test import APIClient
from rest_framework import status
from django.core.urlresolvers import reverse

# Create your tests here.
class ModelTestCase(TestCase):
    """ Test that User model can be set up """

    def setUp(self):
        self.user_id = "01"
        self.firstName = "Test"
        self.lastName = "Case"
        self.user = User(user_id=self.user_id)

    def test_model_can_create_a_user(self):
        old_count = User.objects.count()
        self.user.save()
        new_count = User.objects.count()
        self.assertNotEqual(old_count, new_count)

class ViewTestCase(TestCase):
    """ Test for api views """

    def setUp(self):
        """ Define test client & other test variables """
        self.client = APIClient()
        self.user_data = {'id': 1, 'firstName': 'Harry', 'lastName': 'Potter'}
        self.response = self.client.post(
            reverse('create'),
            self.user_data,
            format='json'
        )

    def test_api_can_create_a_user(self):
        """ Test api has user creation capability """
        self.assertEqual(self.response.status_code, status.HTTP_201_CREATED)

    def test_api_can_get_a_user(self):
        """ Test api can get a given user """
        user = User.objects.get()
        response = self.client.get(
            reverse('details',
            kwargs={'pk': user.user_id}), format='json'
        )

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertContains(response, user)

    def test_api_can_update_user(self):
        """ Test the api can update a given user """
        change_user = {'firstName': 'Something new', 'lastName': 'Something even newer'}
        res = self.client.put(
            reverse('details', kwargs={'pk': user.user_id}),
            change_user, format='json'
        )
        self.assertEqual(rest.status_code, status.HTTP_200_OK)

    def test_api_can_delete_user(self):
        """ Test the api can delete a given user """
        user = User.objects.get()
        response = self.client.delete(
            reverse('details', kwargs={'pk': 'user.user_id'}),
            format='json',
            follow=True
        )

        self.assertEquals(response.status_code, status.HTTP_204_NO_CONTENT)
