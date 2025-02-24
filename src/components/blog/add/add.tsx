"use client"
import React, { useState } from "react";
import './style.css'
// import { LexicalComposer } from "@lexical/react/LexicalComposer";
// import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
// import { ContentEditable } from "@lexical/react/LexicalContentEditable";
// import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
// import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
// import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
// import { EditorState } from "lexical";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";


const editorConfig = {
    namespace: "MyEditor",
    onError(error: Error) {
        console.error(error);
    },
};

const AddBlog: React.FC = () => {
    const [name, setName] = useState("");
    const [shortDescription, setShortDescription] = useState("");
    // const [editorState, setEditorState] = useState<EditorState | null>(null);

    return (
        <div className="min-h-screen flex bg-gray-900 p-6">
            <div className="bg-gray-800 w-full max-w-3xl p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-white mb-4">Create New Blog</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-300 mb-1">Name</label>
                        <input type="text" className="w-full p-3 bg-gray-700 rounded text-white" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-300 mb-1">Short Description</label>
                        <input type="text" className="w-full p-3 bg-gray-700 rounded text-white" value={shortDescription} onChange={(e) => setShortDescription(e.target.value)} />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-300 mb-1">Content</label>
                        <SimpleMDE className="custom-mde" placeholder="enter blog content" />
                    </div>
                    <button type="submit" className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-3 px-4 rounded-lg text-lg font-medium">Submit</button>
                </form>
            </div>

        </div>
    );
};

export default AddBlog;
