# Step-by-Step Guide to Build the NSX Livefire Skill

The NSX Livefire Skill leverages [AWS Lambda](https://aws.amazon.com/lambda/), the [Alexa Skills Kit (ASK)](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit), and the [ASK SDK](https://developer.amazon.com/public/community/post/Tx213D2XQIYH864/Announcing-the-Alexa-Skills-Kit-for-Node-js), while providing the business logic, multiple language support, use cases, error handling and help functions for your skill. 

# Let's Get Started

## Step 1. Setting up Your Alexa Skill in the Developer Portal

Skills are managed through the Amazon Developer Portal. You’ll link the Lambda function you created to a skill defined in the [Developer Portal](https://developer.amazon.com/).

 1. Navigate to the Amazon Developer Portal. Sign in or create a free account (upper right). You might see a different image if you have registered already or our page may have changed. If you see a similar menu and the ability to create an account or sign in, you are in the right place.

  ![](https://s3.amazonaws.com/lantern-code-samples-images/trivia/devsignin.png)

 2. Once signed in, navigate to Alexa and select **"Getting Started"** under Alexa Skills Kit.

  ![](https://s3.amazonaws.com/lantern-code-samples-images/trivia/Getstartedask.png)

 3. Here is where you will define and manage your skill. Select **"Add a New Skill"**

  ![](https://s3.amazonaws.com/lantern-code-samples-images/trivia/AddnewSkill.png)

 4. Select an initial language you want to support, and then optionally add additional languages later if needed (in Step 7). Make sure the radio button for the custom interaction model is selected for “Skill Type”. Add the name of the skill. You can use “NSX Livefire” for this example. Remember, when you create a skill that you will publish, you will use a name that you define for your skill. That name will be the one that shows up in the Alexa App. Add the invocation name. Since we are creating the NSX Livefire Skill, type “NSX Livefire”. We will not use Audio Player for this skill, select "No". **Note**: "Global Fields" information apply to all languages supported by the skill. Finally, select **Next**.

   ![](https://s3.amazonaws.com/lantern-code-samples-images/trivia/skill_information.PNG)

 5. Now, notice you're in the Interaction Model section.

   ![](https://s3.amazonaws.com/lantern-code-samples-images/trivia/interactionmodel.PNG)

 6. Next, we need to define our skill’s Interaction Model. Let’s begin with the intent schema. In the context of Alexa, an intent represents an action that fulfills a user’s spoken request. Intents can optionally have arguments called slots. We will  be using custom slots in this skill. Note: You will need to define both custom slot type values and sample utterances in language that matches current language tab.

* Review the intent schema below. This is written in JSON and provides the information needed to map the intents we want to handle programmatically.  Copy/Paste the intent schema in the [GitHub repository here](https://github.com/baloo247/nsxlivefire/speechassets/IntentSchema.txt) to Intent Schema section in Developer Portal.

* You will see the intents for getting a answer from user, and then a collection of built-in intents to simplify handling common user tasks. Help intent will handle any time the user asks for help, stop and cancel are built-in intents to make it easier for you to handle when a user wants to exit the application. For more on the use of built-in intents, go [here](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/implementing-the-built-in-intents).

```JSON
{
  "intents": [
    {
      "intent": "AnswerIntent",
      "slots": [
        {
          "name": "Answer",
          "type": "AMAZON.NUMBER"
        }
      ]
    },
    {
      "intent": "DontKnowIntent"
    },
    {
      "intent": "AMAZON.StartOverIntent"
    },
    {
      "intent": "AMAZON.RepeatIntent"
    },
    {
      "intent": "AMAZON.HelpIntent"
    },
    {
      "intent": "AMAZON.YesIntent"
    },
    {
      "intent": "AMAZON.NoIntent"
    },
    {
      "intent": "AMAZON.StopIntent"
    },
    {
      "intent": "AMAZON.CancelIntent"
    }
  ]
}
```
![](https://s3.amazonaws.com/lantern-code-samples-images/trivia/intent_schema.PNG)

 7. Create the Custom Slots
 
Select and copy/paste the custom slots from [GitHub](https://github.com/baloo247/nsxlivefire/speechAssets/customslots) Note there are two custom slots you define - LIST_OF_ITEMS and START_GAME
 
 8. The next step is to build the utterance list.

Select and copy/paste the sample utterances from [GitHub](https://github.com/baloo247/nsxlivefire/speechAssets/sample_utterances.txt) with your initial language. For example, if your select English (US) as initial language above, then you will need to copy/paste SampleUtterances_en_US.txt in previous link. An example of utterances is listed below. Once they are copied, the screen should look similar to the following image:

![](https://s3.amazonaws.com/lantern-code-samples-images/trivia/sample_utterances_us.PNG)

 9. Select **Save**. You should see the interaction model being built (this might a take a minute or two). If you select next, your changes will be saved and you will go directly to the Configuration screen. After selecting Save, it should now look like this:

    ![](https://s3.amazonaws.com/lantern-code-samples-images/trivia/interactionmodel_build_success.PNG)

Next we will configure the AWS Lambda function that will host the logic for our skill.

## Step 2: Creating Your Skill Logic Using AWS Lambda

### Download the Alexa Skills and Zip 

To make the development of skills easier, I've provided all the relevant files in the github repo. 

 1. First, you will need to download the skill code from the repository. Download the following files and folders - 
 
      node_modules (folder)
      index.js	(file)
      package.json (file)
      question.js	(file)
      recipes.js (file)

 4. Navigate to where you downloaded the files and folder 

 5. Compress the files inside the src directory into a zip file. **Remember**, You will use this file in a later step.

### Create an AWS Account

 ![](https://s3.amazonaws.com/lantern-code-samples-images/trivia/aws_home.png)

  1. Open [aws.amazon.com](https://aws.amazon.com/) and then choose **‘Create a Free Account’**

* Follow the online instructions. Do not worry about the IAM role, we will do that later.
* You will need a Valid Credit Card to set up your account (note the AWS Free Tier will suffice however. You can find out more about the free tier [here](https://aws.amazon.com/free/)).
* Part of the sign-up procedure involves receiving a phone call and entering a PIN using the phone keypad.

 2. Sign in to the AWS Console

  ![](https://s3.amazonaws.com/lantern-code-samples-images/trivia/aws_login.png)

 3. It can sometimes take a couple of minutes for your new AWS account to go live. You will receive an e-mail when your account is active.

### Create an AWS Lambda Function

AWS Lambda lets you run code without provisioning or managing servers. You pay only for the compute time you consume - there is no charge when your code is not running. With Lambda, you can run code for virtually any type of application or backend service - all with zero administration. Just upload your code and Lambda takes care of everything required to run and scale your code with high availability.

**Note: If you are new to Lambda and would like more information, visit the [Lambda Getting Started Guide](https://docs.aws.amazon.com/lambda/latest/dg/getting-started.html).**

 1. **IMPORTANT**: For Regions (upper right) , Select **US East (N. Virginia)** for US skills and **EU (Ireland)** for UK/DE skills. These are the only two regions currently supported for Alexa skill development on AWS Lambda, and choosing the right region will guarantee lower latency.

 ![](https://s3.amazonaws.com/lantern-code-samples-images/trivia/aws_region.png)

 2. Select **Lambda** from Compute services (upper left)

 ![](https://s3.amazonaws.com/lantern-code-samples-images/trivia/aws_lambda.png)

 3. Select **“Create a Lambda Function”** to begin the process of defining your Lambda function.

 4. In **‘Select Blueprint’** page, select **“Blank Function”**

 ![](https://s3.amazonaws.com/lantern-code-samples-images/trivia/blank_function.PNG)

 5. Now, you need to configure the event that will trigger your function to be called. As we are building skills with the Alexa Skills Kit, click on the gray dash-lined box and select Alexa Skills Kit from the dropdown menu.

 ![](https://s3.amazonaws.com/lantern-code-samples-images/trivia/aws_lambda_ask.png)

 6. Choose **Next** to continue.

 ![](https://s3.amazonaws.com/lantern-code-samples-images/trivia/aws_next.png)

 7. You should now be in the **"Configure Function"** section. Enter the Name, Description, and select "Node 4.3" as the Runtime for your skill as in the example.

 ![](https://s3.amazonaws.com/lantern-code-samples-images/trivia/aws_config_function.PNG)

 8. Select the **‘Code Entry Type’** as **‘Upload Zip File’** and upload the zip file containing the example you created in Step 1. **Note:** This zip file should contain the relevant node.js files, including the node_modules subfolder.

 ![](https://s3.amazonaws.com/lantern-code-samples-images/trivia/aws_upload_zip.png)

 9. Set your handler and role as follows:

    * Keep Handler as ‘index.handler’
    * Drop down the “Role” menu and select **“Create a new custom role”**. (Note: if you have already used Lambda you may already have a ‘lambda_basic_execution’ role created that you can use.) This will launch a new tab in the IAM Management Console.

 ![](https://s3.amazonaws.com/lantern-code-samples-images/trivia/aws_role.png)

 10. You will be asked to set up your Identity and Access Management or “IAM” role if you have not done so. AWS Identity and Access Management (IAM) enables you to securely control access to AWS services and resources for your users. Using IAM, you can create and manage AWS users and groups, and use permissions to allow and deny their access to AWS resources. We need to create a role that allows our skill to invoke this Lambda function. In the Role Summary section, select "Create a new IAM Role" from the IAM Role dropdown menu. The Role Name and policy document will automatically populate.

 ![](https://s3.amazonaws.com/lantern-code-samples-images/trivia/hide-details.jpg)

 11. Select **“Allow”** in the lower right corner and you will be returned to your Lambda function.


 ![](https://s3.amazonaws.com/lantern-code-samples-images/trivia/allowrole.png)

 12. Keep the Advanced settings as default. Select **‘Next’** and review. You should see something like below. Then select **‘Create Function’**:

 ![](https://s3.amazonaws.com/lantern-code-samples-images/trivia/CreateFunctionbuitton.PNG)

 13. Congratulations, you have created your AWS Lambda function. **Copy** the ARN for use in the Configuration section of the Amazon Developer Portal.

![](https://s3.amazonaws.com/lantern-code-samples-images/trivia/ARN.PNG)

## Step 3: Add Your Lambda Function to Your Skill

 1. Navigate back to [developer.amazon.com](https://developer.amazon.com/) and select your skill from the list. You can select the skill name or the edit button.

 ![](https://s3.amazonaws.com/lantern-code-samples-images/trivia/edit.PNG)

 2. Select the Configuration section. Add the ARN from the Lambda function you created in the AWS Console earlier. Select the **Lambda ARN (Amazon Resource Name)** radio button and tick the corresponding region. Then, select **“No”** for account linking since we will not be connecting to an external account for this tutorial. Paste the ARN you copied earlier into the Endpoint field. Then select **Next**. **Note:** the region(s) here should match the region(s) of your Lambda function(s).

 ![](https://s3.amazonaws.com/lantern-code-samples-images/trivia/configuration.PNG)

 3. You have now completed the initial development of your skill. Now it's time to test.

## Step 4: Testing Your Skill

 1. In the Test area, we are going to enter a sample utterance in the Service Simulator section and see how Alexa will respond. In this example, we have called the skill ‘NSX Livefire’. This is the ‘Invocation Name’ we set up in the “Skill Information” section.

    * In the Service Simulator, type **‘open NSX Lievire’** and select **“Ask NSX Livefire”**.

  ![](https://s3.amazonaws.com/lantern-code-samples-images/trivia/ask_test.PNG)

 2. You should see the formatted JSON request from the Alexa Service and the response coming back. Verify that you get a correct Lambda response, and notice the card output. You will want to customize this output later.

  ![](https://s3.amazonaws.com/lantern-code-samples-images/trivia/servicessimulator.PNG)

 3. (Optional) Testing with your device. This is optional as you can do all the testing in the portal. Assuming your Alexa device is on-line (and logged in with the same account as your developer account), you should now see your skill enabled in the Alexa app and ask Alexa to launch your skill. For more information on testing an Alexa skill and registering an Alexa-enabled device, [check here](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/testing-an-alexa-skill).

### Not working (getting an invalid response)?
* Do you have the right ARN copied from your Developer Portal/Skill into your your Lambda function?
* Are you calling the right invocation name?
* Are you saying launch, start or open?
* Are you sure you have no other skills in your accounts with the same invocation name?
* For this template specifically, you should have a minimum of 20 questions for a good customer experience.

