import React from 'react';

import UploadUrl from './UploadUrl';
//send  url to local
import SummarizeViewer from './SummarizeViewer';

function Content() {
  return (
    <div className="space-y-6 w-full px-2 md:px-4 xl:px-6">
      <UploadUrl />
      <SummarizeViewer/>
      {/* Future */}
    </div>
  );
}


export default Content;
