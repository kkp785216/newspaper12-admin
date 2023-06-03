// "use client"

// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import { useState } from 'react';

// const Writer = () => {
//     const [editorData, setEditorData] = useState('');

//     const handleEditorChange = (event, editor) => {
//         const data = editor.getData();
//         setEditorData(data);
//     };
//     return (
//         <div>
//             <h2>CKEditor</h2>
//             <CKEditor
//                 editor={ClassicEditor}
//                 data={editorData}
//                 onChange={handleEditorChange}
//             />
//             <h3>Editor Content:</h3>
//             <div dangerouslySetInnerHTML={{ __html: editorData }} />
//         </div>
//     )
// }

// export default Writer;
