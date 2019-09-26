import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'
 
import IndexPreview from './preview-templates/IndexPreview'
import DefaultPreview from './preview-templates/DefaultPreview'
import EventPreview from './preview-templates/EventPreview'
import VideoPreview from './preview-templates/VideoPreview'
import ImageGalleryPreview from './preview-templates/ImageGalleryPreview'
import LinkListPreview from './preview-templates/LinkListPreview'
import AudioPreview from './preview-templates/AudioPreview'
import AudioListPreview from './preview-templates/AudioListPreview'

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate('index', IndexPreview)
CMS.registerPreviewTemplate('who-is-she', DefaultPreview)
CMS.registerPreviewTemplate('videos', VideoPreview)
CMS.registerPreviewTemplate('events', EventPreview)
CMS.registerPreviewTemplate('web-ring', LinkListPreview)
CMS.registerPreviewTemplate('gallery', ImageGalleryPreview)
CMS.registerPreviewTemplate('t-shirts', ImageGalleryPreview)
CMS.registerPreviewTemplate('sounds', AudioListPreview)
CMS.registerPreviewTemplate('public-eye', LinkListPreview)
CMS.registerPreviewTemplate('music', AudioPreview)
