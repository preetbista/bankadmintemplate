import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <a rel="noopener noreferrer">
          Bank Management System
        </a>
        <span className="ms-1">&copy; 2022 College Project.</span>
      </div>
      <div className="ms-auto">
        <span className="me-1"></span>
        <a target="_blank" rel="noopener noreferrer">
          Admin Panel
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
