import React, { useState, useRef } from 'react';
import RecordRTC from 'recordrtc';
import io from 'socket.io-client';

export default function Streming() {
  const [stream, setStream] = useState(null);
  const [recording, setRecording] = useState(false);
  const recorderRef = useRef(null);

  const startRecording = () => {
    const mediaStream = navigator.mediaDevices.getDisplayMedia({
      video: true,
      audio: true,
    });

    if (mediaStream) {
      setStream(mediaStream);

      const recorder = new RecordRTC(mediaStream, {
        type: 'video',
        mimeType: 'video/webm',
      });

      recorder.startRecording();
      recorderRef.current = recorder;

      setRecording(true);
    } else {
      console.error('Error al obtener acceso a la pantalla');
    }
  };

  const stopRecording = () => {
    if (recorderRef.current) {
      recorderRef.current.stopRecording();

      recorderRef.current.save(async (blob) => {
        const videoData = new Blob([blob], { type: 'video/webm' });
        const formData = new FormData();
        formData.append('video', videoData);

        // Enviar el video al servidor utilizando Socket.io
       // const socket = io('http://localhost:3000');
        //socket.emit('video', formData);

        setRecording(false);
      });
    }
  };

  return (
    <div>
      {recording ? (
        <button onClick={stopRecording}>Detener grabación</button>
      ) : (
        <button onClick={startRecording}>Comenzar grabación</button>
      )}
    </div>
  );
};

