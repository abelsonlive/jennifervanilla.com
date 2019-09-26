import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import IndexPreview from './preview-templates/IndexPreview'
import WhoIsShePreview from './preview-templates/WhoIsShePreview'
import ShowPreview from './preview-templates/ShowPreview'

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate('index', IndexPreview)
CMS.registerPreviewTemplate('who-is-she', WhoIsShePreview)
CMS.registerPreviewTemplate('show', ShowPreview)
