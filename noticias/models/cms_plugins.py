from cms.plugin_base import CMSPluginBase
from cms.plugin_pool import plugin_pool
from .post_plugin import PostPlugin
from django.utils.translation import gettext as _


@plugin_pool.register_plugin  # register the plugin
class PostPlugin(CMSPluginBase):
    model = PostPlugin  # model where plugin data are saved
    module = _("Posts")
    name = _("Post Plugin")  # name of the plugin in the interface
    render_template = "noticias/noticia_plugin.html"

    def render(self, context, instance, placeholder):
        context.update({'instance': instance})
        return context