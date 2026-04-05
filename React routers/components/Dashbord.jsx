import React from 'react'

function dashbord() {
  return (
    <>    <div>Dashboard</div>
    <div className="flex justify-center items-center gap-5 my-1">
  <Link to="/dashboard" className="text-blue-500 hover:underline">Admin</Link>
  <Link to="/dashboard/profile" className="text-blue-500 hover:underline">Teacher</Link>
  <Link to="/dashboard/student" className="text-blue-500 hover:underline">Student</Link>
</div>
</>
  )
}

export default dashbord