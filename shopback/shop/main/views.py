from django.shortcuts import render
from rest_framework import viewsets
from .serializers import ShopSerializer, OperationResultSerializer
from rest_framework.decorators import api_view, action
from rest_framework.response import Response


from .models import Shop, OperationResult
# Create your views here.


class NearbyShops(viewsets.ModelViewSet):
    queryset = Shop.objects.filter(isLiked=False)
    serializer_class = ShopSerializer

class PreferredShops(viewsets.ModelViewSet):
    queryset = Shop.objects.filter(isLiked=True)
    serializer_class = ShopSerializer


class LikeShop(viewsets.ModelViewSet):
    serializer_class = OperationResultSerializer

    def get_queryset(self):
        shop = Shop.objects.get(id=self.kwargs['pk'])
        shop.isLiked = True
        shop.save()
        return OperationResult.objects.filter(result=True)


class RemoveShop(viewsets.ModelViewSet):
    serializer_class = OperationResultSerializer

    def get_queryset(self):
        shop = Shop.objects.get(id=self.kwargs['pk'])
        shop.isLiked = False
        shop.save()
        return OperationResult.objects.filter(result=True)