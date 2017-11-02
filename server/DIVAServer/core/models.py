from django.db import models
from django.core.validators import MinLengthValidator

class User(models.Model):
    user_id = models.CharField(max_length=100, primary_key=True)
    firstName = models.CharField(max_length=50, blank=False)
    lastName = models.CharField(max_length=50, blank=False)
    suffix = models.CharField(max_length=5)
    telephoneNum = models.CharField(max_length=10)
    gender = models.CharField(max_length=10)
    dateOfBirth = models.CharField(max_length=8)
    resStreetAddress1 = models.TextField()
    resStreetAddress2 = models.TextField()
    resCity = models.TextField()
    resCounty = models.TextField()
    resState = models.TextField()
    resZip = models.CharField(max_length=5)
    mailStreetAddress1 = models.TextField()
    mailStreetAddress2 = models.TextField()
    mailCity = models.TextField()
    mailState = models.TextField()
    mailZip = models.CharField(max_length=5)
    ssn = models.CharField(max_length=9)
    driversLicense = models.CharField(max_length=20)
    citizenshipDocType = models.TextField()
    politicalParty = models.TextField()
    voterStatus = models.TextField()
    absenteeApply = models.TextField()

class Meta:
    ordering = ('user_id',)
