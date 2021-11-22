const data = {
    steps: [
        {
            id: 'step-1',
            stepNumber: 1,
            components: [
                {
                    id: 'field-1-1',
                    type: 'Input',
                    props: {
                        id: '13e1fc60-560c-5d8f-b348-589d4aba5016',
                        value: '',
                        labelText: 'Write something here...',
                        leadText: "It's good for you",
                        placeholder: 'text goes here...'
                    }
                },
                {
                    id: 'field-1-2',
                    type: 'Select',
                    props: {
                        id: '2d160300-71e5-5f2c-8e02-c86c92214050',
                        options: [
                            { label: 'select 1', value: 'select-1' },
                            { label: 'select 2', value: 'select-2' },
                            { label: 'select 3', value: 'select-3' }
                        ],
                        labelText: 'Select from this list'
                    }
                }
            ]
        },
        {
            id: 'step-2',
            stepNumber: 2,
            components: [
                {
                    id: 'field-2-1',
                    type: 'Toggle',
                    props: {
                        id: 'f7b06005-09c1-53c2-b68d-a77b26a68465',
                        value: '',
                        labelText: 'Toggle this thing'
                    }
                },
                {
                    id: 'field-2-2',
                    type: 'Input',
                    props: {
                        id: '6b02851e-2bf8-5c30-a758-fc4e1903ddeb',
                        value: '',
                        type: 'textarea',
                        labelText: 'Another one of these'
                    }
                },
                {
                    id: 'field-2-3',
                    type: 'ComplexSelect',
                    props: {
                        id: '1f6cbe4d-43f9-52ce-9a3d-e7cd7ddc8a3a',
                        labelText: 'This one is complicated',
                        options: [
                            { label: 'select 1', value: 'select-1' },
                            { label: 'select 2', value: 'select-2' },
                            { label: 'select 3', value: 'select-3' }
                        ]
                    }
                }
            ]
        },
        {
            id: 'step-3',
            stepNumber: 3,
            components: [
                {
                    id: 'field-3-1',
                    type: 'Input',
                    props: {
                        id: 'd543c932-6163-556f-9d7e-765ce11488ee',
                        value: '',
                        placeholder: 'default placeholder'
                    }
                },
                {
                    id: 'field-3-2',
                    type: 'Checkboxes',
                    props: {
                        id: 'f7b06005-09c1-53c2-b68d-a77b26a68465',
                        options: [
                            { labelText: 'hello' },
                            { labelText: 'Jerry' }
                        ],
                        labelText: 'Which one?'
                    }
                }
            ]
        }
    ]
};

export default data;
