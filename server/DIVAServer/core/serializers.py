from rest_framework import serializers
from core.models import User
from django.core.files.base import ContentFile
from rest_framework import serializers
import base64
import six
import uuid


""" Serializer to map the Model instance into JSON """
class UserSerializer(serializers.ModelSerializer):
    # citizenshipDocument = serializers.ImageField(max_length=None)
    # test = Base64ImageField(citizenshipDocument)
    # test = base64.b64encode(citizenshipDocument)
    # citizenshipDocument = Base64ImageField(max_length=None)

    class Meta:
        model = User
        fields = ('voter_id', 'firstName', 'middleName', 'lastName', 'suffix', 'telephoneNum', 'gender', 'dateOfBirth',
        'resStreetAddress1', 'resStreetAddress2', 'resCity', 'resCounty', 'resState', 'resZip', 'mailStreetAddress1', 'mailStreetAddress2', 'mailCity', 'mailState', 'mailZip', 'ssn', 'driversLicense', 'citizenshipDocType', 'citizenshipDocument', 'politicalParty', 'voterStatus', 'absenteeApply')

# class Base64ImageField(serializers.ImageField):
#     def to_internal_value(self, data):
#
#         # Check if this is a base64 string
#         if isinstance(data, six.string_types):
#             # Check if the base64 string is in the "data:" format
#             if 'data:' in data and ';base64,' in data:
#                 # Break out the header from the base64 content
#                 header, data = data.split(';base64,')
#
#             # Try to decode the file. Return validation error if it fails.
#             try:
#                 decoded_file = base64.b64decode(data)
#             except TypeError:
#                 self.fail('invalid_image')
#
#             # Generate file name:
#             file_name = str(uuid.uuid4())[:12] # 12 characters are more than enough.
#             # Get the file name extension:
#             file_extension = self.get_file_extension(file_name, decoded_file)
#
#             complete_file_name = "%s.%s" % (file_name, file_extension, )
#
#             data = ContentFile(decoded_file, name=complete_file_name)
#
#         return super(Base64ImageField, self).to_internal_value(data)
#
#     def get_file_extension(self, file_name, decoded_file):
#         import imghdr
#
#         extension = imghdr.what(file_name, decoded_file)
#
#         extension = "jpg" if extension == "jpeg" else extension
#
#         return extension
