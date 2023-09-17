<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resume</title>
    <style>
h1 {
    font-size: 16px !important;
    font-weight: bold;
    margin: 0;
}

h2 {
    font-size: 12px !important;
    font-weight: bold;
    margin: 0;
}

body {
    font-family: "Times New Roman", serif;
    font-size: 11px !important;
    width: 8.5in;
    height: 11in;
    margin: auto;
    padding: 1in;
}

ul {
    margin-bottom: 1em;
    margin-left: 2em;
}

.centered-content {
    text-align: center;
    margin: 0 auto;
    width: 100%;
    padding: 20px 0;
}

.section-entry {
    margin-top: 0.1em;
    margin-bottom: 0.1em;
}

.subheader {
    font-size: 1em;
    font-weight: normal;
    margin-top: 0;
    margin-bottom: 0;
}

.section-content {
    margin-left: 2em;
}

.hidden {
    display: none;
}
    </style>
</head>

<body>
<div id="resumeContainer">
    <!-- Personal Information Section -->
    <div class="centered-content">
        <h1 data-ms-member="full-name"></h1>
        <p>
            <span data-ms-member="location"></span> |
            <span data-ms-member="link"></span> |
            <span data-ms-member="phone-number"></span> |
            <span data-ms-member="email1"></span>
        </p>
    </div>
    

    <!-- Summary -->
   <div id="summary-section" class="hidden">
    <h2>SUMMARY</h2>
    <hr>
    <div class="section-content" data-ms-member="summary">
        
    </div>
</div>
    <!-- Education -->
<div id="education-section" class="hidden">
    <h2>EDUCATION</h2>
    <hr>
    <div class="section-entry" data-ms-member="education-entry">
    <table style="width: 100%; border-collapse: collapse;">
        <tr>
            <td style="width: 50%; padding: 0;"><strong data-ms-member="university-name"></strong></td>
            <td style="width: 50%; text-align: right; padding: 0;"><span data-ms-member="university-location"></span></td>
        </tr>
        <tr>
            <td style="padding: 0;"><p class="subheader" data-ms-member="major-degree"></p></td>
            <td style="text-align: right; padding: 0;"><em data-ms-member="graduation-date"></em></td>
        </tr>
    </table>
    <div class="section-content">
        <strong>GPA:</strong> <span data-ms-member="gpa"></span> | <strong>Awards:</strong> <span data-ms-member="awards"></span>
    </div>
</div>

<div id="work-section" class="hidden">
    <h2>WORK EXPERIENCE</h2>
    <hr>

    <!-- Entry 1 -->
    <div class="section-entry" data-ms-member="work-entry-1">
        <table style="width: 100%; border-collapse: collapse;">
            <tr>
                <td style="width: 60%; padding: 0;"><strong data-ms-member="company-name"></strong></td>
                <td style="width: 20%; text-align: right; padding: 0;"><span data-ms-member="company-location"></span></td>
                <td style="width: 20%; text-align: right; padding: 0;"><em data-ms-member="dates-of-employment"></em></td>
            </tr>
            <tr>
                <td style="padding: 0;"><p class="subheader" data-ms-member="job-title"></p></td>
            </tr>
        </table>
        <div class="section-content" data-ms-member="job-description"></div>
    </div>

    <!-- Entry 2 -->
    <div class="section-entry" data-ms-member="work-entry-2">
        <table style="width: 100%; border-collapse: collapse;">
            <tr>
                <td style="width: 60%; padding: 0;"><strong data-ms-member="company-name2"></strong></td>
                <td style="width: 20%; text-align: right; padding: 0;"><span data-ms-member="company-location2"></span></td>
                <td style="width: 20%; text-align: right; padding: 0;"><em data-ms-member="dates-of-employment2"></em></td>
            </tr>
            <tr>
                <td style="padding: 0;"><p class="subheader" data-ms-member="job-title2"></p></td>
            </tr>
        </table>
        <div class="section-content" data-ms-member="job-description2"></div>
    </div>

    <!-- Entry 3 -->
    <div class="section-entry" data-ms-member="work-entry-3">
        <table style="width: 100%; border-collapse: collapse;">
            <tr>
                <td style="width: 60%; padding: 0;"><strong data-ms-member="company-name3"></strong></td>
                <td style="width: 20%; text-align: right; padding: 0;"><span data-ms-member="company-location3"></span></td>
                <td style="width: 20%; text-align: right; padding: 0;"><em data-ms-member="dates-of-employment3"></em></td>
            </tr>
            <tr>
                <td style="padding: 0;"><p class="subheader" data-ms-member="job-title3"></p></td>
            </tr>
        </table>
        <div class="section-content" data-ms-member="job-description3"></div>
    </div>

    <!-- Entry 4 -->
    <div class="section-entry" data-ms-member="work-entry-4">
        <table style="width: 100%; border-collapse: collapse;">
            <tr>
                <td style="width: 60%; padding: 0;"><strong data-ms-member="company-name4"></strong></td>
                <td style="width: 20%; text-align: right; padding: 0;"><span data-ms-member="company-location4"></span></td>
                <td style="width: 20%; text-align: right; padding: 0;"><em data-ms-member="dates-of-employment4"></em></td>
            </tr>
            <tr>
                <td style="padding: 0;"><p class="subheader" data-ms-member="job-title4"></p></td>
            </tr>
        </table>
        <div class="section-content" data-ms-member="job-description4"></div>
    </div>
</div>

<!-- Leadership Experience -->
<div id="leadership-section" class="hidden">
    <h2>LEADERSHIP EXPERIENCE</h2>
    <hr>

    <!-- Entry 1 -->
    <div class="section-entry" data-ms-member="leadership-entry-1">
        <table style="width: 100%; border-collapse: collapse;">
            <tr>
                <td style="width: 60%; padding: 0;"><strong data-ms-member="organization-name"></strong></td>
                <td style="width: 20%; text-align: right; padding: 0;"><span data-ms-member="organization-location"></span></td>
                <td style="width: 20%; text-align: right; padding: 0;"><em data-ms-member="date-of-experience"></em></td>
            </tr>
            <tr>
                <td style="padding: 0;"><p class="subheader" data-ms-member="leadership-position"></p></td>
            </tr>
        </table>
        <div class="section-content" data-ms-member="leadership-description"></div>
    </div>

    <!-- Entry 2 -->
    <div class="section-entry" data-ms-member="leadership-entry-2">
        <table style="width: 100%; border-collapse: collapse;">
            <tr>
                <td style="width: 60%; padding: 0;"><strong data-ms-member="organization-name2"></strong></td>
                <td style="width: 20%; text-align: right; padding: 0;"><span data-ms-member="organization-location2"></span></td>
                <td style="width: 20%; text-align: right; padding: 0;"><em data-ms-member="date-of-experience2"></em></td>
            </tr>
            <tr>
                <td style="padding: 0;"><p class="subheader" data-ms-member="leadership-position2"></p></td>
            </tr>
        </table>
        <div class="section-content" data-ms-member="leadership-description2"></div>
    </div>
</div>

<!-- Project Experience -->
<div id="project-section" class="hidden">
    <h2>PROJECT EXPERIENCE</h2>
    <hr>

    <!-- Entry 1 -->
    <div class="section-entry" data-ms-member="project-entry-1">
        <table style="width: 100%; border-collapse: collapse;">
            <tr>
                <td style="width: 60%; padding: 0;"><strong data-ms-member="project-company-name"></strong></td>
                <td style="width: 20%; text-align: right; padding: 0;"><span data-ms-member="project-location"></span></td>
                <td style="width: 20%; text-align: right; padding: 0;"><em data-ms-member="project-date"></em></td>
            </tr>
            <tr>
                <td style="padding: 0;"><p class="subheader" data-ms-member="project-title"></p></td>
            </tr>
        </table>
        <div class="section-content" data-ms-member="project-description"></div>
    </div>

    <!-- Entry 2 -->
    <div class="section-entry" data-ms-member="project-entry-2">
        <table style="width: 100%; border-collapse: collapse;">
            <tr>
                <td style="width: 60%; padding: 0;"><strong data-ms-member="project-name2"></strong></td>
                <td style="width: 20%; text-align: right; padding: 0;"><span data-ms-member="project-location2"></span></td>
                <td style="width: 20%; text-align: right; padding: 0;"><em data-ms-member="project-date2"></em></td>
            </tr>
            <tr>
                <td style="padding: 0;"><p class="subheader" data-ms-member="project-title2"></p></td>
            </tr>
        </table>
        <div class="section-content" data-ms-member="project-description2"></div>
    </div>
</div>

    
    <!-- Skills and Interests -->
    <div id="skills-section">
        <h2>SKILLS &amp; INTERESTS</h2>
        <hr>
        <div class="section-content">
            <p><strong>Skills:</strong> <span data-ms-member="skills">Java, Python, SQL, Front-end Development, Machine Learning</span></p>
            <p><strong>Interests:</strong> <span data-ms-member="interests">Traveling, Reading, Music Production</span></p>
        </div>
    </div>
    <script> 
document.addEventListener('DOMContentLoaded', function () {
    
    function formatContent(content) {
        // Check for numbered list format
        if (/^\d+\./.test(content)) {
            content = content.replace(/\d+\./g, '-');
        }
        
        // Split content into individual points based on dash
        const points = content.split('-').map(point => point.trim()).filter(point => point);
        
        // Convert points to bullet format
        return points.map(point => `• ${point}`).join('\n');
    }

    // List of sections to check
    const sections = ['summary', 'education', 'work', 'leadership', 'project'];

    sections.forEach(section => {
        const sectionElement = document.getElementById(`${section}-section`);
        if (!sectionElement) return; // If the section doesn't exist in the DOM, skip

        let isSectionContentPresent = false;

        // Special check for the summary section
        if (section === 'summary') {
            const summaryContent = sectionElement.querySelector('.section-content[data-ms-member="summary"]');
            if (summaryContent && summaryContent.textContent.trim()) {
                isSectionContentPresent = true;
            }
        } else {
            // Check content within the section
            const contentElements = sectionElement.querySelectorAll('[data-ms-member], [data-ms-member] *'); // Check both direct and nested elements
            contentElements.forEach(contentElement => {
                if (contentElement.textContent.trim()) {
                    // Format the content to use bullet points
                    contentElement.textContent = formatContent(contentElement.textContent);
                    isSectionContentPresent = true;
                }
            });
        }

        // If the section has content, show it
        if (isSectionContentPresent) {
            sectionElement.classList.remove('hidden');
        }
    });
});


 </script>
   </div>
</body>
