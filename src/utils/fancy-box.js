import { Fancybox } from "@fancyapps/ui";

const fancyBox = () => {
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

  const workEcademicsGalleryImages = [
    { src: "/projects/1_E-CADEMICS/1_login.jpeg", caption: "Login Page" },
    { src: "/projects/1_E-CADEMICS/2_hero.jpeg", caption: "Hero Section" },
    { src: "/projects/1_E-CADEMICS/3_books.jpeg", caption: "Books Page" },
    { src: "/projects/1_E-CADEMICS/4_about.jpeg", caption: "About Us Page" },
    { src: "/projects/1_E-CADEMICS/5_contact-us.jpeg", caption: "Contact Us Page" },
  ];

  const simpleQuizSystemGalleryImages = [
    { src: "/projects/2_SQS/1_login.PNG", caption: "Login Interface" },
    { src: "/projects/2_SQS/2_register.PNG", caption: "Registration Interface" },
    { src: "/projects/2_SQS/3_new-record.PNG", caption: "Added New User" },
    { src: "/projects/2_SQS/4_lobby.PNG", caption: "Quiz Lobby" },
    { src: "/projects/2_SQS/5_quiz-list.png", caption: "Quiz List" },
    { src: "/projects/2_SQS/6_wrong-answer.png", caption: "Wrong Answer" },
    { src: "/projects/2_SQS/7_correct-answer.png", caption: "Correct Answer" },
    { src: "/projects/2_SQS/8_create-quiz.PNG", caption: "Create Quiz" },
    { src: "/projects/2_SQS/9_profile.PNG", caption: "Profile" },
    { src: "/projects/2_SQS/10_update-account.png", caption: "Update Account" },
    { src: "/projects/2_SQS/11_delete-account.PNG", caption: "Delete Account" },
    { src: "/projects/2_SQS/12_successfully-deleted.PNG", caption: "Successfully Deleted Account" },
  ];

  const quizardGalleryImages = [
    { src: "/projects/3_QUIZARD/1_landing-page.mp4", caption: "Landing Page", thumb: "/projects/3_QUIZARD/1_landing-page.png" },
    { src: "/projects/3_QUIZARD/2_faqs.jpeg", caption: "FAQS Page" },
    { src: "/projects/3_QUIZARD/3_login.jpeg", caption: "Login Page" },
    { src: "/projects/3_QUIZARD/4_register.jpeg", caption: "Register Page" },
    { src: "/projects/3_QUIZARD/5_user-welcome.jpeg", caption: "Welcome Page" },
    { src: "/projects/3_QUIZARD/6_user-profile.jpeg", caption: "Profile" },
    { src: "/projects/3_QUIZARD/7_quiz-list.jpeg", caption: "Quiz List" },
    { src: "/projects/3_QUIZARD/8_create-quiz.jpeg", caption: "Create Quiz" },
    { src: "/projects/3_QUIZARD/9_quiz-record.jpeg", caption: "Quiz Record" },
    { src: "/projects/3_QUIZARD/10_about-us.jpeg", caption: "About Us" },
    { src: "/projects/3_QUIZARD/11_about-me.jpeg", caption: "Me" },
    { src: "/projects/3_QUIZARD/12_admin-student-list.jpeg", caption: "Admin Student List" },
    { src: "/projects/3_QUIZARD/13_admin-professor-list.jpeg", caption: "Admin Professor List" },
    { src: "/projects/3_QUIZARD/14_admin-quiz-list.jpeg", caption: "Admin Quiz List" },
    { src: "/projects/3_QUIZARD/15_admin-quiz-subjects.jpeg", caption: "Admin Quiz Subjects" },
    { src: "/projects/3_QUIZARD/16_admin-quiz-responses.jpeg", caption: "Admin Quiz Responses" }
  ];

  const aquabnbGalleryImages = [
    { src: "/projects/4_AQUABNB/1_hero.png", caption: "Hero Section" },
    { src: "/projects/4_AQUABNB/2_explore.png", caption: "Places I" },
    { src: "/projects/4_AQUABNB/3_explore.png", caption: "Places II" },
    { src: "/projects/4_AQUABNB/4_contact-section.png", caption: "Contact Section" },
    { src: "/projects/4_AQUABNB/5_login.png", caption: "Login" },
    { src: "/projects/4_AQUABNB/6_logged-in.png", caption: "Already Login" },
    { src: "/projects/4_AQUABNB/7_register.png", caption: "Register" },
    { src: "/projects/4_AQUABNB/8_available-places.png", caption: "Show Avaialable Places" },
  ];

  const ecommerceGalleryImages = [
    { src: "/projects/5_ECOMMERCE/1_hero.png", caption: "Hero Section" },
    { src: "/projects/5_ECOMMERCE/2_products.png", caption: "Products" },
    { src: "/projects/5_ECOMMERCE/3_codes.png", caption: "Codes in Apache Netbeans" },
  ];

  const lmsKLDGalleryImages = [
    { src: "/projects/6_LMS/1_home.png", caption: "Home Page" },
    { src: "/projects/6_LMS/2_about-us.png", caption: "About Us" },
    { src: "/projects/6_LMS/3_group.png", caption: "Developers" },
    { src: "/projects/6_LMS/4_contact-us.png", caption: "Contact Us" },
    { src: "/projects/6_LMS/5_student-identification.png", caption: "Student Identification" },
    { src: "/projects/6_LMS/6_popup.png", caption: "SweetAlert 2" },
    { src: "/projects/6_LMS/7_register.png", caption: "Register Account" },
    { src: "/projects/6_LMS/8_register-confirmation.png", caption: "Confirmation Modal" },
    { src: "/projects/6_LMS/9_registered.png", caption: "Modal Message" },
    { src: "/projects/6_LMS/10_professor-create-group.png", caption: "Professor Create Group" },
    { src: "/projects/6_LMS/11_professor-created-group.png", caption: "Professor Created Group" },
    { src: "/projects/6_LMS/12_professor-announcement.png", caption: "Professor Create Announcement" },
    { src: "/projects/6_LMS/13_professor-group.png", caption: "Professor Group" },
    { src: "/projects/6_LMS/14_student-dashboard.png", caption: "Student Dashboard" },
    { src: "/projects/6_LMS/15_student-join-group.png", caption: "Student Join Group" },
    { src: "/projects/6_LMS/16_student-joined-group.png", caption: "Student Joined Group" },
    { src: "/projects/6_LMS/17_student-create-post.png", caption: "Student Create Post" },
    { src: "/projects/6_LMS/18_group-uploads.png", caption: "Group Upload Files" },
    { src: "/projects/6_LMS/19_group-assessments.png", caption: "Group Assessments" },
    { src: "/projects/6_LMS/20_admin-dashboard.png", caption: "Admin Dashboard" },
    { src: "/projects/6_LMS/21_admin-accounts.png", caption: "Admin Manage Accounts" },
    { src: "/projects/6_LMS/22_admin-log-events.png", caption: "Admin Manage Log Events" },
    { src: "/projects/6_LMS/23_admin-rooms.png", caption: "Admin Manage Rooms" },
    { src: "/projects/6_LMS/24_admin-rooms.png", caption: "Admin Manage Rooms" },
  ]

  const admissionKLDGalleryImages = [
    { src: "/projects/7_ADMISSION-KLD/1_landing-page.mp4", caption: "Landing Page", thumb: "/projects/7_ADMISSION-KLD/1_landing-page.png" },
    { src: "/projects/7_ADMISSION-KLD/2_apply.png", caption: "Personal Information" },
    { src: "/projects/7_ADMISSION-KLD/3_apply.png", caption: "Family Background" },
    { src: "/projects/7_ADMISSION-KLD/4_apply.png", caption: "Siblings" },
    { src: "/projects/7_ADMISSION-KLD/5_apply.png", caption: "Academic Background Achievements" },
    { src: "/projects/7_ADMISSION-KLD/6_apply.png", caption: "Disciplinary Record, Vaccination Status & Agreement" },
    { src: "/projects/7_ADMISSION-KLD/7_application-form.png", caption: "Upload Necessary Files" },
    { src: "/projects/7_ADMISSION-KLD/8_application-form.png", caption: "Upload Necessary Files" },
    { src: "/projects/7_ADMISSION-KLD/9_set-password.png", caption: "Set Password" },
    { src: "/projects/7_ADMISSION-KLD/10_admin-portal.png", caption: "Admin Portal" },
    { src: "/projects/7_ADMISSION-KLD/11_admin-dashboard.png", caption: "Admin Dashboard" },
    { src: "/projects/7_ADMISSION-KLD/12_admin-dashboard.png", caption: "Admin Dashboard" },
    { src: "/projects/7_ADMISSION-KLD/13_admin-manage-students.png", caption: "Admin Manage Students" },
    { src: "/projects/7_ADMISSION-KLD/14_admin-manage-courses.png", caption: "Admin Manage Courses" },
    { src: "/projects/7_ADMISSION-KLD/15_login-portal.png", caption: "Student Login Portal" },
    { src: "/projects/7_ADMISSION-KLD/16_student-dashboard.png", caption: "Student Dashboard" },
    { src: "/projects/7_ADMISSION-KLD/17_student-profile.png", caption: "Student Profile" },
  ]

  // FEATURED GALLERY
  document.querySelectorAll([
    "[data-fancybox='featured__gallery']",
    "[data-fancybox='work__ecademics']",
    "[data-fancybox='work__simple-quiz-system']",
    "[data-fancybox='work__quizard']",
    "[data-fancybox='work__aquabnb']",
    "[data-fancybox='work__ecommerce']",
    "[data-fancybox='work__lmsKLD']",
    "[data-fancybox='work__admissionKLD']",
  ]).forEach(link => {
    link.addEventListener("click", (event) => {
      event.preventDefault();

      const clickedSource = link.getAttribute("href");
      const galleryGroup = link.dataset.fancybox;
      let images;

      switch(galleryGroup) {
        case "featured__gallery":
          images = featuredGalleryImages;
          break;
        case "work__ecademics":
          images = workEcademicsGalleryImages;
          break;
        case "work__simple-quiz-system":
          images = simpleQuizSystemGalleryImages;
          break;
        case "work__quizard":
          images = quizardGalleryImages;
          break;
        case "work__aquabnb":
          images = aquabnbGalleryImages;
          break;
        case "work__ecommerce":
          images = ecommerceGalleryImages;
          break;
        case "work__lmsKLD":
          images = lmsKLDGalleryImages;
          break;
        case "work__admissionKLD":
          images = admissionKLDGalleryImages;
          break;
      }

      const index = images.findIndex(image => image.src === clickedSource);

      Fancybox.show(
        images.map(({ src, caption, thumb }) => ({ src, caption, thumb })),
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