import React from 'react'

function Content() {
  return (
    <div className="side-content-wrap">
          <div className="sidebar-left open" data-perfect-scrollbar="" data-suppress-scroll-x="true">
              <ul className="navigation-left">
                  <li className="nav-item active" data-item="dashboard">
                      <a className="nav-item-hold" href="#">
                          <i className="nav-icon i-Bar-Chart"></i>
                          <span className="nav-text">Dashboard</span>
                      </a>
                      <div className="triangle"></div>
                  </li>
                  <li className="nav-item" data-item="uikits">
                      <a className="nav-item-hold" href="#">
                          <i className="nav-icon i-Library"></i>
                          <span className="nav-text">UI kits</span>
                      </a>
                      <div className="triangle"></div>
                  </li>
                  <li className="nav-item" data-item="extrakits">
                      <a className="nav-item-hold" href="#">
                          <i className="nav-icon i-Suitcase"></i>
                          <span className="nav-text">Extra kits</span>
                      </a>
                      <div className="triangle"></div>
                  </li>
                  <li className="nav-item" data-item="apps">
                      <a className="nav-item-hold" href="#">
                          <i className="nav-icon i-Computer-Secure"></i>
                          <span className="nav-text">Apps</span>
                      </a>
                      <div className="triangle"></div>
                  </li>
                  <li className="nav-item" data-item="forms">
                      <a className="nav-item-hold" href="#">
                          <i className="nav-icon i-File-Clipboard-File--Text"></i>
                          <span className="nav-text">Forms</span>
                      </a>
                      <div className="triangle"></div>
                  </li>
                  <li className="nav-item">
                      <a className="nav-item-hold" href="datatables.html">
                          <i className="nav-icon i-File-Horizontal-Text"></i>
                          <span className="nav-text">Datatables</span>
                      </a>
                      <div className="triangle"></div>
                  </li>
                  <li className="nav-item" data-item="sessions">
                      <a className="nav-item-hold" href="#">
                          <i className="nav-icon i-Administrator"></i>
                          <span className="nav-text">Sessions</span>
                      </a>
                      <div className="triangle"></div>
                  </li>
                  <li className="nav-item" data-item="others">
                      <a className="nav-item-hold" href="#">
                          <i className="nav-icon i-Double-Tap"></i>
                          <span className="nav-text">Others</span>
                      </a>
                      <div className="triangle"></div>
                  </li>
                  <li className="nav-item">
                      <a className="nav-item-hold" href="http://demos.ui-lib.com/gull-html-doc/" target="_blank">
                          <i className="nav-icon i-Safe-Box1"></i>
                          <span className="nav-text">Doc</span>
                      </a>
                      <div className="triangle"></div>
                  </li>
              </ul>
          </div>

          <div className="sidebar-left-secondary" data-perfect-scrollbar="" data-suppress-scroll-x="true">
              <ul className="childNav" data-parent="dashboard">
                  <li className="nav-item">
                      <a href="dashboard.v1.html" className="open">
                          <i className="nav-icon i-Clock-3"></i>
                          <span className="item-name">Version 1</span>
                      </a>
                  </li>
                  <li className="nav-item">
                      <a href="dashboard.v2.html">
                          <i className="nav-icon i-Clock-4"></i>
                          <span className="item-name">Version 2</span>
                      </a>
                  </li>
                  <li className="nav-item">
                      <a href="dashboard.v3.html">
                          <i className="nav-icon i-Over-Time"></i>
                          <span className="item-name">Version 3</span>
                      </a>
                  </li>
                  <li className="nav-item">
                      <a href="dashboard.v4.html">
                          <i className="nav-icon i-Clock"></i>
                          <span className="item-name">Version 4</span>
                      </a>
                  </li>
              </ul>
              <ul className="childNav" data-parent="forms">
                  <li className="nav-item">
                      <a href="form.basic.html">
                          <i className="nav-icon i-File-Clipboard-Text--Image"></i>
                          <span className="item-name">Basic Elements</span>
                      </a>
                  </li>
                  <li className="nav-item">
                      <a href="form.layouts.html">
                          <i className="nav-icon i-Split-Vertical"></i>
                          <span className="item-name">Form Layouts</span>
                      </a>
                  </li>
                  <li className="nav-item">
                      <a href="form.input.group.html">
                          <i className="nav-icon i-Receipt-4"></i>
                          <span className="item-name">Input Groups</span>
                      </a>
                  </li>
                  <li className="nav-item">
                      <a href="form.validation.html">
                          <i className="nav-icon i-Close-Window"></i>
                          <span className="item-name">Form Validation</span>
                      </a>
                  </li>
                  <li className="nav-item">
                      <a href="smart.wizard.html">
                          <i className="nav-icon i-Width-Window"></i>
                          <span className="item-name">Smart Wizard</span>
                      </a>
                  </li>
                  <li className="nav-item">
                      <a href="tag.input.html">
                          <i className="nav-icon i-Tag-2"></i>
                          <span className="item-name">Tag Input</span>
                      </a>
                  </li>
                  <li className="nav-item">
                      <a href="editor.html">
                          <i className="nav-icon i-Pen-2"></i>
                          <span className="item-name">Rich Editor</span>
                      </a>
                  </li>
              </ul>
              <ul className="childNav" data-parent="apps">
                  <li className="nav-item">
                      <a href="invoice.html">
                          <i className="nav-icon i-Add-File"></i>
                          <span className="item-name">Invoice</span>
                      </a>
                  </li>
                  <li className="nav-item">
                      <a href="inbox.html">
                          <i className="nav-icon i-Email"></i>
                          <span className="item-name">Inbox</span>
                      </a>
                  </li>
                  <li className="nav-item">
                      <a href="chat.html">
                          <i className="nav-icon i-Speach-Bubble-3"></i>
                          <span className="item-name">Chat</span>
                      </a>
                  </li>
              </ul>
              <ul className="childNav" data-parent="extrakits">
                  <li className="nav-item">
                      <a href="image.cropper.html">
                          <i className="nav-icon i-Crop-2"></i>
                          <span className="item-name">Image Cropper</span>
                      </a>
                  </li>
                  <li className="nav-item">
                      <a href="loaders.html">
                          <i className="nav-icon i-Loading-3"></i>
                          <span className="item-name">Loaders</span>
                      </a>
                  </li>
                  <li className="nav-item">
                      <a href="ladda.button.html">
                          <i className="nav-icon i-Loading-2"></i>
                          <span className="item-name">Ladda Buttons</span>
                      </a>
                  </li>
                  <li className="nav-item">
                      <a href="toastr.html">
                          <i className="nav-icon i-Bell"></i>
                          <span className="item-name">Toastr</span>
                      </a>
                  </li>
                  <li className="nav-item">
                      <a href="sweet.alerts.html">
                          <i className="nav-icon i-Approved-Window"></i>
                          <span className="item-name">Sweet Alerts</span>
                      </a>
                  </li>
                  <li className="nav-item">
                      <a href="tour.html">
                          <i className="nav-icon i-Plane"></i>
                          <span className="item-name">User Tour</span>
                      </a>
                  </li>
                  <li className="nav-item">
                      <a href="upload.html">
                          <i className="nav-icon i-Data-Upload"></i>
                          <span className="item-name">Upload</span>
                      </a>
                  </li>
              </ul>
              <ul className="childNav" data-parent="uikits">
                  <li className="nav-item">
                      <a href="alerts.html">
                          <i className="nav-icon i-Bell1"></i>
                          <span className="item-name">Alerts</span>
                      </a>
                  </li>
                  <li className="nav-item">
                      <a href="accordion.html">
                          <i className="nav-icon i-Split-Horizontal-2-Window"></i>
                          <span className="item-name">Accordion</span>
                      </a>
                  </li>
                  <li className="nav-item">
                      <a href="badges.html">
                          <i className="nav-icon i-Medal-2"></i>
                          <span className="item-name">Badges</span>
                      </a>
                  </li>
                  <li className="nav-item">
                      <a href="buttons.html">
                          <i className="nav-icon i-Cursor-Click"></i>
                          <span className="item-name">Buttons</span>
                      </a>
                  </li>
                  <li className="nav-item">
                      <a href="cards.html">
                          <i className="nav-icon i-Line-Chart-2"></i>
                          <span className="item-name">Cards</span>
                      </a>
                  </li>
                  <li className="nav-item">
                      <a href="card.metrics.html">
                          <i className="nav-icon i-ID-Card"></i>
                          <span className="item-name">Card Metrics</span>
                      </a>
                  </li>
                  <li className="nav-item">
                      <a href="carousel.html">
                          <i className="nav-icon i-Video-Photographer"></i>
                          <span className="item-name">Carousels</span>
                      </a>
                  </li>
                  <li className="nav-item">
                      <a href="lists.html">
                          <i className="nav-icon i-Belt-3"></i>
                          <span className="item-name">Lists</span>
                      </a>
                  </li>
                  <li className="nav-item">
                      <a href="pagination.html">
                          <i className="nav-icon i-Arrow-Next"></i>
                          <span className="item-name">Paginations</span>
                      </a>
                  </li>
                  <li className="nav-item">
                      <a href="popover.html">
                          <i className="nav-icon i-Speach-Bubble-2"></i>
                          <span className="item-name">Popover</span>
                      </a>
                  </li>
                  <li className="nav-item">
                      <a href="progressbar.html">
                          <i className="nav-icon i-Loading"></i>
                          <span className="item-name">Progressbar</span>
                      </a>
                  </li>
                  <li className="nav-item">
                      <a href="tables.html">
                          <i className="nav-icon i-File-Horizontal-Text"></i>
                          <span className="item-name">Tables</span>
                      </a>
                  </li>
                  <li className="nav-item">
                      <a href="tabs.html">
                          <i className="nav-icon i-New-Tab"></i>
                          <span className="item-name">Tabs</span>
                      </a>
                  </li>
                  <li className="nav-item">
                      <a href="tooltip.html">
                          <i className="nav-icon i-Speach-Bubble-8"></i>
                          <span className="item-name">Tooltip</span>
                      </a>
                  </li>

                  <li className="nav-item">
                      <a href="modals.html">
                          <i className="nav-icon i-Duplicate-Window"></i>
                          <span className="item-name">Modals</span>
                      </a>
                  </li>
                  <li className="nav-item">
                      <a href="nouislider.html">
                          <i className="nav-icon i-Width-Window"></i>
                          <span className="item-name">Sliders</span>
                      </a>
                  </li>
              </ul>
              <ul className="childNav" data-parent="sessions">
                  <li className="nav-item">
                      <a href="signin.html">
                          <i className="nav-icon i-Checked-User"></i>
                          <span className="item-name">Sign in</span>
                      </a>
                  </li>
                  <li className="nav-item">
                      <a href="signup.html">
                          <i className="nav-icon i-Add-User"></i>
                          <span className="item-name">Sign up</span>
                      </a>
                  </li>
                  <li className="nav-item">
                      <a href="forgot.html">
                          <i className="nav-icon i-Find-User"></i>
                          <span className="item-name">Forgot</span>
                      </a>
                  </li>
              </ul>
              <ul className="childNav" data-parent="others">
                  <li className="nav-item">
                      <a href="not.found.html">
                          <i className="nav-icon i-Error-404-Window"></i>
                          <span className="item-name">Not Found</span>
                      </a>
                  </li>
                  <li className="nav-item">
                      <a href="user.profile.html">
                          <i className="nav-icon i-Male"></i>
                          <span className="item-name">User Profile</span>
                      </a>
                  </li>
                  <li className="nav-item">
                      <a href="blank.html">
                          <i className="nav-icon i-File-Horizontal"></i>
                          <span className="item-name">Blank Page</span>
                      </a>
                  </li>
              </ul>
          </div>
          <div className="sidebar-overlay"></div>
      </div>
  )
}

export default Content