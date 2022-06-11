from rest_framework import routers
from .api import PreferenceViewSet

router = routers.DefaultRouter()
router.register('api/preferences', PreferenceViewSet, 'preferences')

urlpatterns = router.urls