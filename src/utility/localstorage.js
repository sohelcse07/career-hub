const getStorageJobApplication = () => {
  const storedJobApplication = localStorage.getItem('job-Application');
  if (storedJobApplication) {
    return JSON.parse(storedJobApplication);
  }
  return [];
};

const saveJobApplication = (id) => {
  const storedJobApplication = getStorageJobApplication();
  const exists = storedJobApplication.find((jobId) => jobId === id);
  if (!exists) {
    storedJobApplication.push(id);
    localStorage.setItem(
      'job-Application',
      JSON.stringify(storedJobApplication)
    );
  }
};

// ❌ নতুন remove ফাংশন
const removeJobApplication = (id) => {
  const storedJobApplication = getStorageJobApplication();
  const updated = storedJobApplication.filter((jobId) => jobId !== id);
  localStorage.setItem('job-Application', JSON.stringify(updated));
};

export { getStorageJobApplication, saveJobApplication, removeJobApplication };
