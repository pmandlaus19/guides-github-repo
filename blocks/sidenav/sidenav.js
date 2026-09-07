import { migrateTree } from "../utils.js";
const treeData = [{"displayName":"GUIGUIDERUG_1.7.0","isMap":true,"children":[{"displayName":"welcome","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/welcome","children":[{"displayName":"overview","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/overview"},{"displayName":"content","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/content"}]},{"displayName":"getting_started","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/getting-started","children":[{"displayName":"introduction","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/introduction","children":[{"displayName":"support_widgets","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/support-widgets"},{"displayName":"built_in_fonts","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/built-in-fonts"},{"displayName":"target","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/target"}]},{"displayName":"installation","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/installation","children":[{"displayName":"hardware_requirement_of_lvgl_application_0","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/hardware-requirement-of-lvgl-application-0"},{"displayName":"windows_10","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/windows-10"},{"displayName":"ubuntu_22_04","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/ubuntu-22-04"},{"displayName":"macos","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/macos"},{"displayName":"offline_template","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/offline-template"}]},{"displayName":"quick_start","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/quick-start","children":[{"displayName":"create_project_based_on_template","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/create-project-based-on-template"},{"displayName":"create_project_based_on_local_project","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/create-project-based-on-local-project"},{"displayName":"run_simulator_0","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/run-simulator-0"}]}]},{"displayName":"ide_function","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/ide-function","children":[{"displayName":"project_management","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/project-management","children":[{"displayName":"upgrade_project","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/upgrade-project"},{"displayName":"Export_project","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/export-project"},{"displayName":"export_application_template","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/export-application-template"}]},{"displayName":"project_build_and_deploy","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/project-build-and-deploy","children":[{"displayName":"edit_code","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/edit-code"}]},{"displayName":"resource_management","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/resource-management"},{"displayName":"system_setting","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/system-setting","children":[{"displayName":"lvgl","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/lvgl"}]},{"displayName":"keyb_menu_function","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/keyb-menu-function","children":[{"displayName":"convert_images","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/convert-images"},{"displayName":"widgets_distribution","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/widgets-distribution"}]},{"displayName":"shortcut_function_0","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/shortcut-function-0"}]},{"displayName":"widget_details","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/widget-details","children":[{"displayName":"attribute","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/attribute","children":[{"displayName":"screen","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/screen"},{"displayName":"button_0","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/button-0"},{"displayName":"image_button_0","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/image-button-0"},{"displayName":"checkbox_0","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/checkbox-0"},{"displayName":"button_matrix_0","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/button-matrix-0"},{"displayName":"switch_0","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/switch-0"},{"displayName":"label_0","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/label-0"},{"displayName":"span_group","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/span-group"},{"displayName":"drop_down","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/drop-down"},{"displayName":"text_area_0","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/text-area-0"},{"displayName":"calender","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/calender"},{"displayName":"table_0","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/table-0"},{"displayName":"tab_view_0","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/tab-view-0"},{"displayName":"message_box_0","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/message-box-0"},{"displayName":"container_0","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/container-0"},{"displayName":"chart_0","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/chart-0"},{"displayName":"canvas_0","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/canvas-0"},{"displayName":"list_0","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/list-0"},{"displayName":"window_0","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/window-0"},{"displayName":"tile_view","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/tile-view"},{"displayName":"menu_0","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/menu-0"},{"displayName":"arc_0","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/arc-0"},{"displayName":"line_0","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/line-0"},{"displayName":"roller_0","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/roller-0"},{"displayName":"led_0","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/led-0"},{"displayName":"color","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/color"},{"displayName":"spinner_0","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/spinner-0"},{"displayName":"spin_box","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/spin-box"},{"displayName":"meter_0","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/meter-0"},{"displayName":"image_1","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/image-1"},{"displayName":"animation_image_0","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/animation-image-0"},{"displayName":"3d_image","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/3d-image"},{"displayName":"bar_0","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/bar-0"},{"displayName":"slider_0","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/slider-0"}]},{"displayName":"advance_widget","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/advance-widget","children":[{"displayName":"lottie_0","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/lottie-0"},{"displayName":"qr_code_0","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/qr-code-0"},{"displayName":"bar_code","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/bar-code"},{"displayName":"analog_clock_0","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/analog-clock-0"},{"displayName":"carousel_0","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/carousel-0"},{"displayName":"video_2","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/video-2"},{"displayName":"digital_clock_0","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/digital-clock-0"},{"displayName":"text_progress_bar","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/text-progress-bar"},{"displayName":"radio_button_0","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/radio-button-0"},{"displayName":"chinese_input_keyboard","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/chinese-input-keyboard"},{"displayName":"date_text","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/date-text"}]},{"displayName":"style","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/style","children":[{"displayName":"preset_style_usage","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/preset-style-usage"},{"displayName":"custom_style","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/custom-style"},{"displayName":"initialize_styles","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/initialize-styles"},{"displayName":"local_styles","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/local-styles"},{"displayName":"parts","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/parts"},{"displayName":"states","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/states"},{"displayName":"properties_0","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/properties-0","children":[{"displayName":"background","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/background"},{"displayName":"font","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/font"},{"displayName":"border","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/border"},{"displayName":"line_1","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/line-1"},{"displayName":"padding","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/padding"},{"displayName":"shadow","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/shadow"}]}]},{"displayName":"event","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/event","children":[{"displayName":"add_event","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/add-event"},{"displayName":"set_action","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/set-action"},{"displayName":"custom_code_action","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/custom-code-action"},{"displayName":"load_screen","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/load-screen"}]}]},{"displayName":"development","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/development","children":[{"displayName":"debug_project","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/debug-project","children":[{"displayName":"target_0","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/target-0","children":[{"displayName":"prerequisites_003","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/prerequisites-003"},{"displayName":"port_lvgl_c_source_file_generated_by_gui_guider_to_001","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/port-lvgl-c-source-file-generated-by-gui-guider-to-001"},{"displayName":"port_project","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/port-project"}]}]},{"displayName":"hardware_acceleration","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/hardware-acceleration","children":[{"displayName":"pxp_enablement","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/pxp-enablement"},{"displayName":"vglite_enablement","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/vglite-enablement"},{"displayName":"recommendations_to_improve_acceleration","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/recommendations-to-improve-acceleration","children":[{"displayName":"general_recommendations","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/general-recommendations"},{"displayName":"vglite_recommendations","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/vglite-recommendations"}]}]},{"displayName":"performance","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/performance","children":[{"displayName":"performance_monitor_enablement","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/performance-monitor-enablement"},{"displayName":"tips_to_improve_the_performance","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/tips-to-improve-the-performance"},{"displayName":"improve_the_performance_for_imx_rt_boards","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/improve-the-performance-for-imx-rt-boards","children":[{"displayName":"prerequisites","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/prerequisites"},{"displayName":"improve_the_performance","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/improve-the-performance"}]}]},{"displayName":"external_storage","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/external-storage","children":[{"displayName":"sd_card","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/sd-card","children":[{"displayName":"sd_card","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/sd-card","children":[{"displayName":"sd_card","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/sd-card"},{"displayName":"sd_card","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/sd-card"},{"displayName":"sd_card","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/sd-card"}]},{"displayName":"sd_card","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/sd-card","children":[{"displayName":"sd_card","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/sd-card"},{"displayName":"sd_card","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/sd-card"},{"displayName":"sd_card","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/sd-card"},{"displayName":"sd_card","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/sd-card"}]}]},{"displayName":"qspi_flash","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/qspi-flash","children":[{"displayName":"add_image_widget_and_set_property","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/add-image-widget-and-set-property"},{"displayName":"build_and_deploy","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/build-and-deploy"}]}]},{"displayName":"porting_rtos","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/porting-rtos","children":[{"displayName":"zephyr","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/zephyr","children":[{"displayName":"setup_zephyr_build_environment","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/setup-zephyr-build-environment"},{"displayName":"get_zephyr_and_install_python_dependencies","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/get-zephyr-and-install-python-dependencies"},{"displayName":"install_zephyr_sdk","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/install-zephyr-sdk"},{"displayName":"design_gui_and_export_code_by_gui_guider","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/design-gui-and-export-code-by-gui-guider"},{"displayName":"build_and_deploy_zephyr_image","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/build-and-deploy-zephyr-image"}]},{"displayName":"frequently_asked_questions_faqs","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/frequently-asked-questions-faqs","children":[{"displayName":"Prerequisite","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/prerequisite"},{"displayName":"untitled2","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/untitled2"},{"displayName":"Prepare_Env_tool","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/prepare-env-tool"},{"displayName":"Download_RT-Thread_and_apply_patches","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/download-rt-thread-and-apply-patches"},{"displayName":"Enable_GUI_demo_project_in_RT-Thread","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/enable-gui-demo-project-in-rt-thread"},{"displayName":"Export_source_of_GUI_designed_by_GUI_Guider","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/export-source-of-gui-designed-by-gui-guider"},{"displayName":"build_and_compile","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/build-and-compile"},{"displayName":"known_issues","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/known-issues"}]},{"displayName":"yocto","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/yocto","children":[{"displayName":"prerequisite_1","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/prerequisite-1"},{"displayName":"create_a_project_0","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/create-a-project-0"},{"displayName":"build_gui_application_binary","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/build-gui-application-binary"},{"displayName":"run_gui_application_on_i_mx93","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/run-gui-application-on-i-mx93"}]},{"displayName":"qnx","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/qnx","children":[{"displayName":"prerequisite_2","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/prerequisite-2"},{"displayName":"design_hmi_application","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/design-hmi-application","children":[{"displayName":"create_a_project_1","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/create-a-project-1"}]},{"displayName":"build_image_binary","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/build-image-binary","children":[{"displayName":"build_by_gui_guider_ide","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/build-by-gui-guider-ide"},{"displayName":"export_code_and_build_applcation","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/export-code-and-build-applcation","children":[{"displayName":"export_code_and_build_in_qdp","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/export-code-and-build-in-qdp"},{"displayName":"build_application","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/build-application"}]}]},{"displayName":"4__run_application_on_board","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/4--run-application-on-board"}]}]},{"displayName":"freemaster_debug_in_gui_guider","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/freemaster-debug-in-gui-guider","children":[{"displayName":"prerequisite_3","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/prerequisite-3"},{"displayName":"debug_ui_design","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/debug-ui-design"},{"displayName":"enable_freemaster","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/enable-freemaster"},{"displayName":"binding_variable_with_widget","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/binding-variable-with-widget"}]}]},{"displayName":"tutoeials","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/tutoeials","children":[{"displayName":"interact_with_peripherials_by_custom_code","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/interact-with-peripherials-by-custom-code"},{"displayName":"add_custom_attributes_and_styles_after_setup_screen","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/add-custom-attributes-and-styles-after-setup-screen"},{"displayName":"reuse_gui_design_on_differenr_boards_and_panels","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/reuse-gui-design-on-differenr-boards-and-panels"},{"displayName":"rotate_screen_and_widgets","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/rotate-screen-and-widgets"},{"displayName":"design_multiple_page_application_by_titleview","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/design-multiple-page-application-by-titleview"},{"displayName":"custimize_variables_in_lv_conf_h","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/custimize-variables-in-lv-conf-h"},{"displayName":"experience_with_micropython_in_gui_guider","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/experience-with-micropython-in-gui-guider","children":[{"displayName":"generate_code","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/generate-code"},{"displayName":"run_simulator","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/run-simulator"},{"displayName":"add_custom_code","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/add-custom-code","children":[{"displayName":"as_event_action","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/as-event-action"},{"displayName":"as_custompy","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/as-custompy"}]},{"displayName":"limitations","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/limitations"}]},{"displayName":"upgrade_a_project_in_a_newer_gui_guider","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/upgrade-a-project-in-a-newer-gui-guider"},{"displayName":"how_to_set_the_gradient_color","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/how-to-set-the-gradient-color"},{"displayName":"how_to_develop_a_multi_language_application","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/how-to-develop-a-multi-language-application"}]},{"displayName":"miscellaneous","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/miscellaneous","children":[{"displayName":"frequently_asked_questions__faqs","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/frequently-asked-questions--faqs"}]},{"displayName":"note_about_the_source_code_in_the_document","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/note-about-the-source-code-in-the-document"},{"displayName":"legal_information","url":"contents/ditamaps/ditamap5614494314618149226/pdfproject/dita/topics/legal-information"}]}]
const mapTitle = "guides-github-repo-main"
const isDesktop = window.matchMedia("(min-width: 900px)");

function expandHeirarchy(element, root) {
  if (element === root) return;
  let parent = element.parentElement;
  parent.classList.remove("closed");
  expandHeirarchy(parent, root);
}

function expandSelection(parent) {
  let queryString = window.location.search;
  let params = new URLSearchParams(queryString);
  let id = params.get("expand");
  let element = document.getElementById(`sidenav-li-${id}`);
  if (!element) return;
  element.classList.add("selected");
  expandHeirarchy(element, parent);
  element.scrollIntoView();
}

function scrollSidenavSelectionToView() {
  const element = document.querySelector('.sidenav-list-item.selected')
  const sidenavContainer = document.getElementsByClassName("sidenav-container")[0];
  if(!element) return
  if (element.offsetTop < sidenavContainer.scrollTop || element.offsetTop + element.offsetHeight > sidenavContainer.scrollTop + sidenavContainer.clientHeight) {
    sidenavContainer.scrollTo({
      top: Math.max(element.offsetTop - 110, 0),
      behavior: 'smooth'
    });
  }
}



function addResizeBar() {
  const sidenavContainer = document.getElementsByClassName("sidenav-container")[0];
  const div = document.createElement("div");
  div.classList.add('sidenav-resize-bar');
  let isResizing = false
  div.addEventListener('mousedown', (evt) => {
    isResizing = true
    document.addEventListener('mousemove', function (event) {
      if (isResizing) {
        let newWidth = event.pageX - sidenavContainer.offsetLeft;
        sidenavContainer.style.width = `${newWidth}px`;
      }
    })
  })
  document.addEventListener('mouseup', function () {
    if (isResizing) {
      isResizing = false;
    }
  })
  sidenavContainer.insertAdjacentElement("afterend", div)
}

function addExpandCollapseButton() {
  const divWrapper = document.createElement("div");
  divWrapper.classList.add('title-close-wrapper')
  const titleSpan = document.createElement("span");
  titleSpan.classList.add('title-span')
  titleSpan.textContent = mapTitle
  const span = document.createElement("span");
  span.classList.add('sidenav-expand-collapse')
  span.classList.add('open')
  const sidenavContainer = document.getElementsByClassName("sidenav-container")[0];
  span.addEventListener('click', () => {
    const isOpen = span.classList.contains('open')
    const sidenavResizer = document.getElementsByClassName("sidenav-resize-bar")[0];
    if(!isOpen) {
      sidenavContainer.classList.remove('collapse-width')
      sidenavResizer.classList.remove('force-hide')
    } else {
      sidenavContainer.classList.add('collapse-width')
      sidenavResizer.classList.add('force-hide')
    }
    span.classList.toggle("open");
  })
  divWrapper.append(titleSpan)
  divWrapper.append(span)
  sidenavContainer.prepend(divWrapper)
}

function generateId(prefix, suffix) {
  if(prefix) {
      return `${prefix}-${suffix}`
  }
  return `${suffix}`
}


window.addEventListener('aem-app-ready', () => {
  scrollSidenavSelectionToView()
})


function createTree(parent, data, prefix, level) {
  const ul = document.createElement("ul");
  ul.classList.add("tree");
  parent.appendChild(ul);
  data.forEach((item, idx) => {
    const li = document.createElement("li");
    const newPrefix = generateId(prefix, level)
    const _id = generateId(newPrefix, idx);
    li.setAttribute("id", `sidenav-li-${_id}`);
    ul.appendChild(li);
    const anchor = document.createElement("a");
    const span = document.createElement("span");
    span.classList.add("chevron-icon-span");
    anchor.textContent = item.displayName;
    anchor.setAttribute("data-li-id", _id);
    anchor.setAttribute("title", item.displayName);
    anchor.setAttribute("aria-label", item.displayName);
    const siteURL =
      window.location.protocol +
      "//" +
      window.location.hostname +
      (window.location.port ? ":" + window.location.port : "");
    if (item.url) {
      let navURL = new URL(item.url, siteURL).href;
      anchor.setAttribute("href", navURL);
      anchor.addEventListener("click", (event) => {
        event.preventDefault();
        onClick(anchor.getAttribute("data-li-id"), navURL);
      });
    }
    li.classList.add("sidenav-list-item");
    li.classList.add("closed");
    if (item.children) {
      li.classList.add("has-children");
      const wrapperSpan = document.createElement("span");
      wrapperSpan.classList.add("chevron-text-wrapper");
      wrapperSpan.appendChild(span);
      wrapperSpan.appendChild(anchor);
      li.appendChild(wrapperSpan);
      createTree(li, item.children, newPrefix, idx);
    } else {
      li.appendChild(anchor);
    }
  });
}

function onClick(id, navURL) {
  const url = new URL(navURL);
  url.searchParams.set("expand", id); // set the query parameter
  window.location.href = url.toString(); // navigate
}

// Get the treeview element and create the tree
const treeview = document.getElementsByClassName("sidenav")[0];
addExpandCollapseButton();
createTree(treeview, treeData, '', '');
migrateTree(isDesktop);
addResizeBar(treeview);
isDesktop.addEventListener("change", () => migrateTree(isDesktop));
expandSelection(treeview);

// Add click event listener to each span element
treeview.querySelectorAll("span").forEach((span) => {
  span.addEventListener("click", (event) => {
    // Toggle the "closed" class on the parent li element
    event.currentTarget.parentNode.classList.toggle("closed");
  });
});