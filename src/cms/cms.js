import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'
 
import IndexPreview from './preview-templates/IndexPreview'
import DefaultPreview from './preview-templates/DefaultPreview'
import EventPreview from './preview-templates/EventPreview'
import VideoPreview from './preview-templates/VideoPreview'
import ImageGalleryPreview from './preview-templates/ImageGalleryPreview'
import LinkListPreview from './preview-templates/LinkListPreview'

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate('index', IndexPreview)
CMS.registerPreviewTemplate('default', DefaultPreview)
CMS.registerPreviewTemplate('video', VideoPreview)
CMS.registerPreviewTemplate('event', EventPreview)
CMS.registerPreviewTemplate('link-list', LinkListPreview)
CMS.registerPreviewTemplate('image-gallery', ImageGalleryPreview)
