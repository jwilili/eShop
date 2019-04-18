from django.urls import path, include
from . import views
from rest_framework import routers

app_name="api"

router = routers.DefaultRouter()
router.register('nearby_shops', views.NearbyShops)
router.register('preferred_shops', views.PreferredShops)
router.register('like_shop', views.LikeShop, base_name="shop")
router.register('remove_liked_shop', views.RemoveShop, base_name="rmshop")

urlpatterns = [
    path('', include(router.urls)),
]