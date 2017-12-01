from django.db import models
from django.core.validators import MinLengthValidator
import uuid
import hashlib

class User(models.Model):
    voter_id = models.CharField(max_length=255, primary_key=True, default='Not Generated')
    firstName = models.CharField(max_length=25, blank=False)
    middleName = models.CharField(max_length=25, blank=True)
    lastName = models.CharField(max_length=30, blank=False)
    suffix = models.CharField(max_length=5, blank=True)
    telephoneNum = models.CharField(max_length=10, blank=True)
    gender = models.CharField(max_length=10)
    dateOfBirth = models.CharField(max_length=8)
    resStreetAddress1 = models.TextField()
    resStreetAddress2 = models.TextField(blank=True)
    resCity = models.TextField()
    resCounty = models.TextField()
    resState = models.TextField()
    resZip = models.CharField(max_length=5)
    mailStreetAddress1 = models.TextField()
    mailStreetAddress2 = models.TextField(blank=True)
    mailCity = models.TextField()
    mailState = models.TextField()
    mailZip = models.CharField(max_length=5)
    ssn = models.CharField(max_length=9)
    driversLicense = models.CharField(max_length=20, blank=True)
    citizenshipDocType = models.TextField()
    citizenshipDocument = models.CharField(max_length=150000, default='CitizenDocument')
    biometricsDocument = models.CharField(max_length=150000, default='BiometricsDocument')
    politicalParty = models.TextField()
    voterStatus = models.TextField()
    absenteeApply = models.TextField()
    date_created = models.DateTimeField(auto_now_add=True)
    date_modified = models.DateTimeField(auto_now=True)

    @property
    def get_voter_id(self):
        voterID = self.resState + '-' + str(uuid.uuid4())
        return voterID

    def save(self, *args, **kwargs):
        self.voter_id = self.get_voter_id
        super(User, self).save(*args, **kwargs)

class Meta:
    ordering = ('user_id',)
