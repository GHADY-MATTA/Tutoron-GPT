import { useState } from 'react';
import axios from 'axios';
import { useVideo } from '../context/VideoContext';

function UploadUrl() {
    // Component logic will be added here
}
const [url, setUrl] = useState('');
const { setVideoId } = useVideo();
const [localVideoId, setLocalVideoId] = useState('');
const [loading, setLoading] = useState(false);
const [successMessage, setSuccessMessage] = useState('');
const [errorMessage, setErrorMessage] = useState('');
