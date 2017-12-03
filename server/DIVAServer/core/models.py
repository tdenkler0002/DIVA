# -*- coding: utf-8 -*-
from django.db import models
from django.core.validators import MinLengthValidator
import uuid
import hashlib
from Crypto.Cipher import AES
import base64
from Crypto import Random
from .AESCipher import *

class User(models.Model):
    voter_id = models.CharField(primary_key=True, default='Not Generated', max_length=255)
    firstName = models.CharField(max_length=25, blank=False)
    middleName = models.CharField(max_length=25, blank=True)
    lastName = models.CharField(max_length=30, blank=False)
    suffix = models.CharField(max_length=5, blank=True)
    telephoneNum = models.CharField(max_length=10, blank=True)
    gender = models.CharField(max_length=10)
    dateOfBirth = models.CharField(max_length=100)
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
    citizenshipDocument = models.TextField(default='CitizenDocument')
    biometricsDocument = models.TextField(default='BiometricsDocument')
    politicalParty = models.TextField()
    voterStatus = models.TextField()
    absenteeApply = models.TextField()
    date_created = models.DateTimeField(auto_now_add=True)
    date_modified = models.DateTimeField(auto_now=True)

    # Calls the AESCipher class to encrypt DOB
    @property
    def encryptDOBField(self):
        cipher = AESCipher('abcdefghijklmnop')
        dob = cipher.encrypt(self.dateOfBirth)
        return dob

    # Calls the AESCipher class to encrypt SSN
    @property
    def encryptSSNField(self):
        cipher = AESCipher('zyxwtvsryuehwbdj')
        ssn = cipher.encrypt(self.ssn)
        return ssn

    # Genegerates a UUID field for the voter ID based on the
    # user's state and a random generated UUID
    @property
    def get_voter_id(self):
        voterID = self.resState + '-' + str(uuid.uuid4())
        return voterID

    # Replaces the fields with transformed fields before saving
    def save(self, *args, **kwargs):
        self.voter_id = self.get_voter_id
        self.dateOfBirth = self.encryptDOBField
        self.ssn = self.encryptSSNField
        super(User, self).save(*args, **kwargs)

class Meta:
    ordering = ('user_id',)
