import React from 'react';

import UploadUrl from './UploadUrl';
import SummarizeViewer from './SummarizeViewer';

function Content() {
  return (
    <div className="space-y-6 w-full px-2 md:px-4 xl:px-6">
      <UploadUrl />
      <SummarizeViewer/>
      {/* Future: Add listing videos here */}
    </div>
  );
}


export default Content;
// helo world 