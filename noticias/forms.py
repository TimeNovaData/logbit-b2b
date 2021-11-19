from django import forms

from noticias.models import Post


class PostWizardForm(forms.ModelForm):
    class Meta:
        model = Post
        exclude = []