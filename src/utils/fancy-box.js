import { Fancybox } from "@fancyapps/ui";

const fancyBox = () => {
  // FEATURED OBJECTS
  const featuredGalleryImages = [
    { src: "/featured/1_hero.png", caption: "Hero Section" },
    { src: "/featured/2_membership.png", caption: "Membership Section" },
    { src: "/featured/3_about-us.png", caption: "About Us Section"},
    { src: "/featured/4_contact.png", caption: "Contact Section" },
    { src: "/featured/5_footer.png", caption: "Footer Section" },
    { src: "/featured/6_login.png", caption: "Patient Login Page" },
    { src: "/featured/7_register.png", caption: "Patient Register Page" },
    { src: "/featured/8_portal.png", caption: "Staff Portal" },
    { src: "/featured/9_patient-dashboard.png", caption: "Patient Dashboard" },
    { src: "/featured/10_profile.png", caption: "Patient Profile" },
    { src: "/featured/11_appointments.png", caption: "Patient Appointments" },
    { src: "/featured/12_doctors.png", caption: "Patient View All Doctors" },
    { src: "/featured/13_view-doctor.png", caption: "Patient Viewing Specific Doctor Details" },
    { src: "/featured/14_calendar.png", caption: "Patient Calendar View" },
    { src: "/featured/15_nurse-dashboard.png", caption: "Nurse Dashboard" },
    { src: "/featured/16_nurse-appointments.png", caption: "Nurse Appointments" },
    { src: "/featured/17_nurse-appointments.png", caption: "Nurse Appointments" },
    { src: "/featured/18_doctor-schedule.png", caption: "Nurse Doctor Schedules" },
    { src: "/featured/19_patient-records.png", caption: "Nurse Patient Records" },
    { src: "/featured/20_admin-dashboard.png", caption: "Admin Dashboard" },
    { src: "/featured/21_manage-admin.png", caption: "Manage Admin Accounts" },
    { src: "/featured/22_manage-doctors.png", caption: "Manage Doctor Accounts" },
    { src: "/featured/23_manage-nurses.png", caption: "Manage Nurse Accounts" }
  ];

  // FEATURED GALLERY
  document.querySelectorAll("[data-fancybox='featured__gallery']").forEach(link => {
    link.addEventListener("click", (event) => {
      event.preventDefault();

      const clickedSource = link.getAttribute("href");
      const index = featuredGalleryImages.findIndex(image => image.src === clickedSource);

      Fancybox.show(
        featuredGalleryImages.map(({ src, caption }) => ({ src, caption })),
        { startIndex: index }
      );
    });
  });

  // ALL PROJECTS MODAL
  document.querySelectorAll("[data-src='#modal__all-projects-button']").forEach(button => {
    button.addEventListener("click", (event) => {
      event.preventDefault();

      Fancybox.show([{ 
        src: "#modal__all-projects",
        type: "inline"
      }], {
        dragToClose: false, // prevents dragging animation
      });
    });
  });
};

export default fancyBox;