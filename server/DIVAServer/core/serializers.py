from rest_framework import serializers
from core.models import User

""" Serializer to map the Model instance into JSON """
class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('voter_id', 'firstName', 'middleName', 'lastName', 'suffix', 'telephoneNum', 'gender', 'dateOfBirth',
        'resStreetAddress1', 'resStreetAddress2', 'resCity', 'resCounty', 'resState', 'resZip', 'mailStreetAddress1', 'mailStreetAddress2', 'mailCity', 'mailState', 'mailZip', 'ssn', 'driversLicense', 'citizenshipDocType', 'citizenshipDocument', 'biometricsDocument', 'politicalParty', 'voterStatus', 'absenteeApply')
