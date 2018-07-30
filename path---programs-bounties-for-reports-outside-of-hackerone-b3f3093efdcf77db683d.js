webpackJsonp([83206242122817],{403:function(e,o){e.exports={data:{markdownRemark:{html:'<p>When hackers submit vulnerabilities to your organization outside of HackerOne, you can leverage the HackerOne API to award hackers for their efforts. The API endpoint isn\'t for awarding bounties for reports on HackerOne itself, but is only for reports that are reported outside of HackerOne. </p>\n<p>*Note: This option is only available for HackerOne Professional, Enterprise, and Community editions. </p>\n<p>To start paying hackers:</p>\n<ol>\n<li>Go to <strong>Settings > Program > Automation > API</strong>. </li>\n<li>Click <strong>Create API Token</strong> to create an API token. </li>\n<li>Enter the unique identifier to authenticate the token in the *<em>New API Token</em> window. </li>\n<li>Click <strong>Create</strong>. </li>\n<li>The API token will be generated and presented to you. This is the only time the API token is shown to you. </li>\n<li>Click <strong>Manage groups</strong> next to the API identifier to grant reward permissions to various groups.</li>\n<li>Select the groups you want to give reward permissions to. By default, the Standard group has Reward permissions. </li>\n<li>Make sure your billing methods have been complete so that there\'s a way to pay out bounties in <strong>Settings > General > Billing</strong>. </li>\n<li>Configure how to award a bounty. Go to <a href="https://api.hackerone.com/docs/v1#/programs/bounties">this page</a> to see the documentation on how to award a bounty. See the code example in cURL and Ruby that\'ll help you. *Note: the 1337 program ID used in the example below is not real and should be replaced with your own program ID. You can find your program ID in report objects or by asking your HackerOne program manager. </li>\n</ol>\n<table>\n<thead>\n<tr>\n<th>cURL</th>\n<th>Ruby</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><img src="https://github.com/Hacker0x01/docs.hackerone.com/blob/master/docs/programs/images/bountiesforreportsoutsideofh1-1.png?raw=true" alt="cURL"></td>\n<td><img src="https://github.com/Hacker0x01/docs.hackerone.com/blob/master/docs/programs/images/bountiesforreportsoutsideofh1-2.png?raw=true" alt="Ruby"></td>\n</tr>\n</tbody>\n</table>\n<ol start="10">\n<li>Award the bounty for the hacker. </li>\n</ol>\n<p>After the bounty has been awarded, the hacker will receive an email to claim the bounty. HackerOne will collect the person\'s tax form before processing the payout. The awarded amount, including your applicable fees, will be deducted from your balance immediately. A resolved dummy report will show up in your Bugs overview, which will help you keep track of the bounties you\'ve paid out.</p>\n<p>For technical questions or help with your implementation, please reach out to support@hackerone.com or your HackerOne program manager. </p>',frontmatter:{path:"/programs/bounties-for-reports-outside-of-hackerone",title:"Bounties for Reports Outside of HackerOne"}}},pathContext:{}}}});
//# sourceMappingURL=path---programs-bounties-for-reports-outside-of-hackerone-b3f3093efdcf77db683d.js.map