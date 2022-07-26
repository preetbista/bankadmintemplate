import React from 'react'

import {
  CAvatar,
  // CBadge,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import {
  // cilBell,
  // cilCreditCard,
  // cilCommentSquare,
  // cilEnvelopeOpen,
  // cilFile,
  // cilLockLocked,
  cilSettings,
  // cilTask,
  cilUser,
  cilLockUnlocked,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'

import avatar8 from './../../assets/images/avatars/8.jpg'
import { useNavigate } from 'react-router-dom'
import { clearToken } from 'src/app/auth/AuthUtil'
import Profile from 'src/app/users/Profile'

const AppHeaderDropdown = () => {
  const navigate = useNavigate()
  const handleLogout = () => {
    console.log("Handling logout")
    clearToken()
    navigate('/login')
  }


  return (
    <>
      <CDropdown variant="nav-item">
        <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
          <CAvatar src={avatar8} size="md" />
        </CDropdownToggle>
        <CDropdownMenu className="pt-0" placement="bottom-end">
          <CDropdownHeader className="bg-light fw-semibold py-2">Settings</CDropdownHeader>
          <CDropdownItem >
            <CIcon icon={cilUser} className="me-2" />
            <Profile />
          </CDropdownItem>
          <CDropdownItem href="#">
            <CIcon icon={cilSettings} className="me-2" />
            Settings
          </CDropdownItem>
          <CDropdownDivider />
          <CDropdownItem href="#">
            <CIcon icon={cilLockUnlocked} className="me-2" />
            <label onClick={handleLogout}>Sign Out</label>
          </CDropdownItem>
        </CDropdownMenu>
      </CDropdown>
    </>
  )
}

export default AppHeaderDropdown
