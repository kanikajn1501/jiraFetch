const JiraApi = require('jira-client');

// Initialize
const jira = new JiraApi({
  protocol: 'https',
  host: 'kanikajn33.atlassian.net', // Replace with your domain
  username: 'kanikajn33@gmail.com', // Jira email
  password: 'ATATT3xFfGF0w1MBDZGK6rygrlZblziKDlV2dyuKANHeAAkImDwWLWWuN19iNzJYZlk2kovCdG2P57CoPIardLQ7KsgNCJkdkV7tV13elf1-3K0N05-dDNMPxsutIVclVIF-fpziSkEoADq89LjbPKJdPPBrmI-FOGOA34MuFyOtyaBBMxtOnqk=C49C1DB4',         // From step 1
  apiVersion: '2',
  strictSSL: true
});

async function getTasksFromProject(projectKey) {
    try {
      const result = await jira.searchJira(
        `project = ${projectKey} ORDER BY created DESC`,
        {
          maxResults: 10,
          fields: ['summary', 'status', 'assignee', 'created']
        }
      );
  
      console.log("Jira Tasks:");
      result.issues.forEach((issue) => {
        console.log(`[${issue.key}] ${issue.fields.summary} | Status: ${issue.fields.status.name}`);
      });
    } catch (err) {
      console.error("Error fetching Jira issues:", err.message);
    }
  }
  
  // Call function
  getTasksFromProject('KAN');