from rest_framework import serializers
from .models import *


class ShopSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shop
        fields = '__all__'


class OperationResultSerializer(serializers.ModelSerializer):
    class Meta:
        model = OperationResult
        fields = '__all__'
