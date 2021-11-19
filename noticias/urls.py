from django.urls import path
from django.conf.urls.static import static
from django.contrib.auth.decorators import login_required
from django.conf import settings
from .views import teste

urlpatterns = [
    path('en/teste/', teste, name='teste'),
]