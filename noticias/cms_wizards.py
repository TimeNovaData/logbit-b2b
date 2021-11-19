from cms.wizards.wizard_base import Wizard
from cms.wizards.wizard_pool import wizard_pool

from noticias.forms import PostWizardForm


class PostWizard(Wizard):
    pass

post_wizard = PostWizard(
    title="Post",
    weight=200,  # determines the ordering of wizards in the Create dialog
    form=PostWizardForm,
    description="Create a new Post",
)

wizard_pool.register(post_wizard)