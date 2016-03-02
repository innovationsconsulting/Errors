Ext.define('Errors.model.PersonModel', {
	extend: "Ext.data.Model",
            config: {
                fields: [
                    {
                        name: 'leadName',
                        type: 'string'
                    },
					{
						name: 'autoLeadId',
						type: 'number'
					}
                ]
            }
        });