import React from 'react'
import { useState, useEffect } from 'react';
import { useParams, useLoaderData } from 'react-router-dom';
import Spinner from '../components/Spinner';

const JobPage = () => {
  const { id } = useParams();
  const job = useLoaderData();

  /* const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await fetch(`/api/jobs/${id}`);
        const data = await res.json();
        setTimeout(() => {
          setJob(data);
          setLoading(false); // Sposta qui il setLoading a false
        }, 1000);

      } catch (error) {
        console.log(error);
        setLoading(false); // Anche in caso di errore, impostare loading a false
      }
    }

    fetchJob()
  }, []) */


  return (
    (<h1>{job.title}</h1>)
  )
}

const jobLoader = async({ params }) => {
  const res = await fetch(`/api/jobs/${params.id}`);
  const data = await res.json();
  return data;
}

export {JobPage as default, jobLoader}