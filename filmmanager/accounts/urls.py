from django.urls import path, include
from .api import RegisterAPI, LoginAPI, UserAPI, CreateGroupAPI
from knox import views as knox_views
urlpatterns = [
  path('api/auth', include('knox.urls')),
  path('api/auth/register', RegisterAPI.as_view()),
  path('api/auth/login', LoginAPI.as_view()),
  path('api/auth/user', UserAPI.as_view()),
  path('api/auth/logout', knox_views.LogoutView.as_view()),
  path('api/group', CreateGroupAPI.as_view({'post': 'perform_create', 'get': 'get_members'})),
  path('api/grouprecommend', CreateGroupAPI.as_view({'get': 'get_recommendations'})),
]
