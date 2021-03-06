import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export class ManagementWard extends React.Component {
  constructor() {
    super();
    this.state = {
      showMenu:false
    };
  }

  handleClick = () =>{
    this.setState({showMenu : !this.state.showMenu})
  }


  render() {
    return (
        <div className="main_wrapper ">
           <div className="inner_dshbrd_wrap">
            <div className="left_dashboard">
              <div className="inner_left_dashboard">
               <div className="logo" onClick={this.handleClick}><i class="fa fa-bars"></i></div>
               <ul className="menu_wrap">
                   <Link to="/management-dashboard" ><li><img src={require('../../assets/Images/menu1_active.png')} /> </li></Link>
                   <Link to="/management-ward"><li><img src={require('../../assets/Images/menu4.png')} /></li></Link>
                   <Link to="/management-device"><li><img src={require('../../assets/Images/menu2.png')} /></li></Link>
                   <Link to="/management-nurse"><li><img src={require('../../assets/Images/menu5.png')} /></li></Link>
                   <Link to="/management-setting"><li><img src={require('../../assets/Images/menu3.png')} /></li></Link>
                 </ul>
               </div>
            </div>
            <div className="right_dashboard">
               <div className="header_dash">
                  <div className="header_right_dash">
                    <img src={require('../../assets/Images/dummy_logo.jpg')} />
                    <span class="logo_hedng">RealDrip</span>
                    <span className="ward">Ward</span>
                  </div>
                  <div className="header_left_dash">
                    <span>How it works</span>
                  </div>
              </div>
              
              <div class="mid-section-dshbrd_mgnt">
                {this.state.showMenu && <div className="second_menu_wrap">
                  <ul>
                    <li>Home</li>
                    <li>Operations</li>
                    <li>Devices</li>
                    <li>Nurses</li>
                    <li>Account</li>
                  </ul>
                  <ul>
                    <li>Sign Out</li>
                  </ul>
                </div>}
                <div className="inner_dash_mgnt_left">
                  <div className="left-mid-dash-mgmnt">
                  <div className="wrap_dash_new_wrad">
                    <div className="mngmnt_top_heading">
                        <h2>All Ward</h2>
                    </div>
                    <div className="add_new_device_wrap_mgmnt">
                        <div className="add_device_btn">Add new ward </div>
                    </div>
                  </div>
                      <div className="opertn_srch_main_wrapper_mgnt">
                        <div className="operation_search_tab_bar_mgnt">
                            <div className="oprtn_search_wrap operation_pdng">
                                <input type="text" className="form-control cstm_search"/>
                                <span className="search_icon"><i class="fa fa-search" aria-hidden="true"></i></span>
                            </div>
                            <div className="oprtn_hmbrgr_image operation_pdng">
                             <i class="fa fa-bars"></i>
                            </div>
                            <div className="oprtn_urgncy_wrap operation_pdng">
                                <span className="txt_urgncy">Urgency</span>
                                <span className="oprtn_down_arrow"><i class="fa fa-chevron-down cstm_dwn_arrow"></i></span>
                            </div>
                        </div>
                      </div>
                      <div class="dash_active_wrap">
                      <ul className="list_heading_ul ul_contnt_mgnt">
                          <li>Label</li>
                          <li>Ward name</li>
                          <li>Devices deployed</li>
                          <li>Registered Nurses</li>
                        </ul>
                        </div>
                      <div class="dash_active_wrap oprtn_scroll_list">
                        <ul className="list_heading_ul ul_contnt_mgnt">    
                         <li>Ward A</li>
                          <li>Heart center</li>
                          <li>20</li>
                          <li>43</li>
                        </ul>
                        <ul className="list_heading_ul ul_contnt_mgnt ">    
                         <li>Ward B</li>
                          <li>Heart center</li>
                          <li>20</li>
                          <li>43</li>
                        </ul>
                        <ul className="list_heading_ul ul_contnt_mgnt ">    
                         <li>Ward C</li>
                          <li>Heart center</li>
                          <li>20</li>
                          <li>43</li>
                        </ul>
                        <ul className="list_heading_ul ul_contnt_mgnt ">    
                         <li>Ward D</li>
                          <li>Heart center</li>
                          <li>20</li>
                          <li>43</li>
                        </ul>
                        <ul className="list_heading_ul ul_contnt_mgnt ">    
                         <li>Ward E</li>
                          <li>Heart center</li>
                          <li>20</li>
                          <li>43</li>
                        </ul>
                        <ul className="list_heading_ul ul_contnt_mgnt ">    
                         <li>Ward F</li>
                          <li>Heart center</li>
                          <li>20</li>
                          <li>43</li>
                        </ul>
                       
                      </div>      
                  </div>
                </div>
                <div className="inner_dash_mgnt_right">
                  <div className="right-mid-dash_mgnt">
                      <div className="wrap_dash_new_wrad">
                        <div className="img_heading_wrap_mgnt">
                          <img className="img_ward_info" src={require('../../assets/Images/menu4.png')}/>
                          <h4 className="ward_info_txt">Ward Info</h4>
                        </div>
                        <div className="add_new_device_wrap_mgmnt">
                            <div className="add_device_btn">Add new ward </div>
                        </div>
                      </div>
                      <div className="ward_info_ul_wrap">
                          <div className="wrad_name_label_wrap">
                            <div className="ward_name">
                              Ward Name
                            </div>
                            <div className="ward_name">
                              Ward Label
                            </div>  
                          </div>
                          <div className="wrad_name_label_wrap">
                            <div className="ward_label">
                              Heart center
                            </div>
                            <div className="ward_label">
                              Ward B
                            </div>  
                          </div>
                     </div>
                    
                     <div className="two_img_cntnt_wrap">
                        <div className="img_cntnt_wrap">
                            <div className="img_info_list_wrap">
                                <img className="img_info_list" src={require('../../assets/Images/drip.png')}/>
                            </div>
                            <div className="wrad_img_txt">
                              <div className="ward_name_img_txt">
                                Ward Name
                              </div>
                              <div className="ward_name_img_txt">
                                Ward Label
                              </div>  
                            </div>
                        </div>
                        <div className="img_cntnt_wrap">
                            <div className="img_info_list_wrap">
                                <img className="img_info_list" src={require('../../assets/Images/drip.png')}/>
                            </div>
                            <div className="wrad_img_txt">
                              <div className="ward_name_img_txt">
                                Ward Name
                              </div>
                              <div className="ward_name_img_txt">
                                Ward Label
                              </div>  
                            </div>
                        </div>
                     </div>
                     <div className="img_cntnt_wrap">
                        <div className="img_info_list_wrap">
                            <img className="img_info_list" src={require('../../assets/Images/drip.png')}/>
                        </div>
                        <div className="wrad_img_txt">
                          <div className="ward_name_img_txt">
                            Ward Name
                          </div>
                          <div className="ward_name_img_txt">
                            Ward Label
                          </div>  
                        </div>
                     </div>  
                  </div>
                  <div className="btn_para">
                       <p>login into ward dashboard to see full information about this device.</p>
                     </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => ({
   // addingUserStarted: state.user.createAdmin.addingUserStarted,
  // addingUserResolved: state.user.createAdmin.addingUserResolved,
  // addingUserError: state.user.createAdmin.addingUserError,
});

export default connect(mapStateToProps)(ManagementWard);
