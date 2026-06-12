import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class MailboxvalidatorValidationApi implements ICredentialType {
        name = 'N8nDevMailboxvalidatorValidationApi';

        displayName = 'Mailboxvalidator Validation API';

        icon: Icon = { light: 'file:../nodes/MailboxvalidatorValidation/mailboxvalidator-validation.png', dark: 'file:../nodes/MailboxvalidatorValidation/mailboxvalidator-validation.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://api.mailboxvalidator.com',
                        required: true,
                        placeholder: 'https://api.mailboxvalidator.com',
                        description: 'The base URL of your Mailboxvalidator Validation API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
