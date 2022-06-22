const Joi = require("joi");

const validationValues = {
    email: Joi.string()
        .lowercase()
        .pattern(new RegExp("^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$"))
        .required()
        .messages({
            "string.base": `Email does not have a valid value`,
            "string.pattern.base": `Email does not have a valid value`,
            "string.empty": `Email cannot be empty`,
            "any.required": `Email is required`,
        }),
    password: Joi.string()
        .lowercase()
        .required().min(6)
        .messages({
            "string.pattern.base": `Password does not have a valid value`,
            "string.empty": `Password cannot be empty`,
            "any.required": `Password is required`,
            "string.min": `Password length must be 6 characters long`,
        }),
    firstName: Joi.string()
        .min(3)
        .max(20)
        .required()
        .messages({
            "string.empty": `Name cannot be empty`,
            "any.required": `Name required`,
            "string.min": `First Name length must be atleast 3 characters long`,
            "string.max": `First Name length must be exeed 20 characters`,
        }),
    lastName: Joi.string()
        .min(3)
        .max(20)
        .required()
        .messages({
            "string.empty": `Name cannot be empty`,
            "any.required": `Name required`,
            "string.min": `Last Name length must be atleast 3 characters long`,
            "string.max": `Last Name length must not be exeed 20 characters`,
        }),
    companyName: Joi.string()
        .optional()
        .messages({
            "string.empty": `companyName cannot be empty`,
        }),
}

const planSchema = Joi.object({
    name: Joi.string().required().messages({
        "string.empty": `name cannot be empty`,
        "any.required": `name is required`,
    }),
    price: Joi.number().required().messages({
        "string.empty": `price cannot be empty`,
        "any.required": `price is required`,
    }),
    stripe_planId: Joi.string().required().messages({
        "string.empty": `stripe_planId cannot be empty`,
        "any.required": `stripe_planId  is required`,
    }),
});

const registerUserSchema = Joi.object({
    email: validationValues.email,
    firstName: validationValues.firstName,
    lastName: validationValues.lastName,
    password: validationValues.password
    // role: Joi.string().required().messages({
    //     "string.empty": `Role cannot be empty`,
    //     "any.required": `Role is required`,
    // }),
    // plan: Joi.string().required().messages({
    //     "string.empty": `Plan cannot be empty`,
    //     "any.required": `Plan is required`,
    // }),
});

const updateUserSchema = Joi.object({
    email: Joi.string().optional().messages({
        "string.empty": `email cannot be empty`
    }),
    firstName: Joi.string().optional().messages({
        "string.empty": `firstName cannot be empty`
    }),
    lastName:Joi.string().optional().messages({
        "string.empty": `lastName be empty`,
    }),
    companyName: Joi.string().optional().messages({
            "string.empty": `companyName cannot be empty`,
        }),
    avatar: Joi.string().optional().messages({
        "string.empty": `avatar cannot be empty`
    }),
    stripe_id:Joi.string().optional().messages({
        "string.empty": `stripe_id cannot be empty`
    })
});

const issueSchema = Joi.object({
    title: Joi.string().required().messages({
        "string.empty": `Title cannot be empty`,
        "any.required": `Title name required`,
    }),
});

const propertySchema = Joi.object({
    // userId: Joi.string().required().messages({
    //     "any.required": `UserId is required`,
    // }),
    name: Joi.string().required().messages({
        "string.empty": `Property Name cannot be empty`,
        "any.required": `Property name is required`,
    }),
    currency: Joi.string().required().messages({
        "string.empty": `Currency cannot be empty`,
        "any.required": `Currency name required`,
    }),
    propertyPhoto: Joi.string().optional().messages({
        "string.empty": `propertyPhoto cannot be empty`,
        "any.required": `propertyPhoto name required`,
    }),
    // propertyImageGallery: Joi.array().optional().messages({
    //     "string.empty": `propertyImageGallery cannot be empty`,
    //     "any.required": `propertyImageGallery name required`,
    // }),
    builtYear: Joi.number().optional().messages({
        "string.empty": `builtYear cannot be empty`,
        "any.required": `builtYear name required`,
    }),
    MIsNumber: Joi.string().optional().messages({
        "string.empty": `MIsNumber cannot be empty`,
        "any.required": `MIsNumber name required`,
    }),
    streetAddress: Joi.string().required().messages({
        "string.empty": `Street Address cannot be empty`,
        "any.required": `Street Address name required`,
    }),
    city: Joi.string().required().messages({
        "string.empty": `City cannot be empty`,
        "any.required": `City name required`,
    }),
    state: Joi.string().required().messages({
        "string.empty": `State cannot be empty`,
        "any.required": `State name required`,
    }),
    zip: Joi.string().required().messages({
        "string.empty": `Zip cannot be empty`,
        "any.required": `Zip is required`,
    }),
    country: Joi.string().required().messages({
        "string.empty": `Country cannot be empty`,
        "any.required": `Country name required`,
    }),
    propertyType: Joi.any().required().messages({
        "string.empty": `Property Type cannot be empty`,
        "any.required": `Property Type name required`,
    }),
    beds: Joi.string().optional().messages({
        "string.empty": `beds cannot be empty`,
        "any.required": `beds name required`,
    }),
    baths: Joi.string().optional().messages({
        "string.empty": `baths cannot be empty`,
        "any.required": `baths name required`,
    }),
    size: Joi.string().optional().messages({
        "string.empty": `size cannot be empty`,
        "any.required": `size name required`,
    }),
    rent: Joi.number().optional().messages({
        "string.empty": `rent cannot be empty`,
        "any.required": `rent name required`,
    }),
    unitInfo: Joi.object().optional().messages({
        "string.empty": `unitInfo cannot be empty`,
        "any.required": `unitInfo name required`,
    }),
    deposit: Joi.number().optional().messages({
        "string.empty": `deposit cannot be empty`,
        "any.required": `deposit name required`,
    }),
    parking: Joi.string().optional().messages({
        "string.empty": `parking cannot be empty`,
        "any.required": `parking name required`,
    }),
    laundry: Joi.string().optional().messages({
        "string.empty": `laundry cannot be empty`,
        "any.required": `laundry name required`,
    }),
    airConditioning: Joi.string().optional().messages({
        "string.empty": `airConditioning cannot be empty`,
        "any.required": `airConditioning name required`,
    }),
    propertyFeatures: Joi.array().optional().messages({
        "string.empty": `propertyFeatures cannot be empty`,
        "any.required": `propertyFeatures name required`,
    }),
    propertyAmenities: Joi.array().optional().messages({
        "string.empty": `propertyAmenities cannot be empty`,
        "any.required": `propertyAmenities name required`,
    }),
    propertyAttachments: Joi.array().optional().messages({
        "string.empty": `propertyAttachments cannot be empty`,
        "any.required": `propertyAttachments name required`,
    }),
    createdBy: Joi.string().required().messages({
        "string.empty": `Created By cannot be empty`,
        "any.required": `Created By is required`,
    }),
});

const contactSchema = Joi.object({
    firstName: validationValues.firstName,
    lastName: validationValues.lastName,
    role: Joi.string().optional().messages({
        "string.empty": `Role cannot be empty`,
        "any.required": `Role is required`,
    }),
    dateOfBirth: Joi.optional().messages({
        "string.empty": `Date OfBirthcannot be empty`,
        "any.required": `Date OfBirth is required`,
    }),
    age: Joi.optional().messages({
        "string.empty": `Age cannot be empty`,
        "any.required": `Age is required`,
    }),
    gender: Joi.string().optional().messages({
        "string.empty": `Gender cannot be empty`,
        "any.required": `Gender is required`,
    }),
    categoryId: Joi.string().optional().messages({
        "string.empty": `categoryId cannot be empty`,
        "any.required": `categoryId is required`,
    }),
    subCategoryId: Joi.string().optional().messages({
        "string.empty": `subCategoryId cannot be empty`,
        "any.required": `subCategoryId is required`,
    }),
    companyName: Joi.string().optional().messages({
        "string.empty": `companyName cannot be empty`,
        "any.required": `companyName is required`,
    }),
    companyWebsite: Joi.string().optional().messages({
        "string.empty": `companyWebsite cannot be empty`,
        "any.required": `companyWebsite is required`,
    }),
    displayAsCompany: Joi.boolean().optional().messages({
        "string.empty": `displayAsCompany cannot be empty`,
        "any.required": `displayAsCompany is required`,
    }),
    email: Joi.string().optional().messages({
        "string.empty": `Email cannot be empty`,
        "any.required": `Email is required`,
    }),
    phone: Joi.string().optional().messages({
        "string.empty": `Phone cannot be empty`,
        "any.required": `Phone is required`,
    }),
    emergencyContact: Joi.array().optional().messages({
        "string.empty": `Phone cannot be empty`,
        "any.required": `Phone is required`,
    }),
    pets: Joi.array().optional().messages({
        "string.empty": `Phone cannot be empty`,
        "any.required": `Phone is required`,
    }),
    vehicle: Joi.array().optional().messages({
        "string.empty": `Phone cannot be empty`,
        "any.required": `Phone is required`,
    }),
    notes: Joi.array().optional().messages({
        "string.empty": `Phone cannot be empty`,
        "any.required": `Phone is required`,
    }),
    address: Joi.array().optional().messages({
        "string.empty": `Address cannot be empty`,
        "any.required": `Address is required`,
    }),
    photo: Joi.string().optional().messages({
        "string.empty": `Photo cannot be empty`,
        "any.required": `Photo is required`,
    }),
    streetAddress: Joi.string().optional().messages({
        "string.empty": `Street Address cannot be empty`,
        "any.required": `Street Address name required`,
    }),
    city: Joi.string().optional().messages({
        "string.empty": `City cannot be empty`,
        "any.required": `City name required`,
    }),
    state: Joi.string().optional().messages({
        "string.empty": `State cannot be empty`,
        "any.required": `State name required`,
    }),
    zip: Joi.string().optional().messages({
        "string.empty": `Zip cannot be empty`,
        "any.required": `Zip is required`,
    }),
    country: Joi.string().optional().messages({
        "string.empty": `Country cannot be empty`,
        "any.required": `Country name required`,
    }),
    documents: Joi.array().optional().messages({
        "string.empty": `propertyAttachments cannot be empty`,
        "any.required": `propertyAttachments name required`,
    }),
    createdBy: Joi.string().required().messages({
        "string.empty": `Created By cannot be empty`,
        "any.required": `Created By is required`,
    }),
});

const listingSchema = Joi.object({
    createdBy: Joi.string().required().messages({
        "string.empty": `Created By cannot be empty`,
        "any.required": `Created By is required`,
    }),
    property: Joi.string().required().messages({
        "string.empty": `Property Ref cannot be empty`,
        "any.required": `Property Ref is required`,
    }),
    marketingDescription: Joi.string().required().messages({
        "string.empty": `Marketing Description cannot be empty`,
        "any.required": `Marketing Description is required`,
    }),
    leaseDetail: Joi.object().optional().messages({
        "string.empty": `Lease Detail cannot be empty`,
        "any.required": `Lease Detail is required`,
    }),
    allowPets: Joi.boolean().required().messages({
        "string.empty": `Allow Pets cannot be empty`,
        "any.required": `Allow Pets is required`,
    }),
    petsDetail: Joi.object().optional().messages({
        "string.empty": `Pets Detail cannot be empty`,
        "any.required": `Pets Detail is required`,
    }),
    phoneNumber: Joi.string().required().messages({
        "string.empty": `Phone Number cannot be empty`,
        "any.required": `Phone Number is required`,
    }),
});

const leaseSchema = Joi.object({
    createdBy: Joi.string().required().messages({
        "string.empty": `Created By cannot be empty`,
        "any.required": `Created By is required`,
    }),
    property: Joi.string().required().messages({
        "string.empty": `Property Ref cannot be empty`,
        "any.required": `Property Ref is required`,
    }),
    tenant: Joi.array().optional().messages({
        "string.empty": `Tenant Ref cannot be empty`,
        "any.required": `Tenant Ref is required`,
    }),
    // recurringRent: Joi.boolean().required().messages({
    //     "string.empty": `Recurring Rent cannot be empty`,
    //     "any.required": `Recurring Rent is required`,
    // }),
    rentSetting: Joi.object().optional().messages({
        "string.empty": `Recurring Rent Setting cannot be empty`,
        "any.required": `Recurring Rent Setting is required`,
    }),
    // requireDeposit: Joi.boolean().required().messages({
    //     "string.empty": `Require Deposit cannot be empty`,
    //     "any.required": `Require Deposit is required`,
    // }),
    depositInfo: Joi.object().optional().messages({
        "string.empty": `Deposit Info cannot be empty`,
        "any.required": `Deposit Info is required`,
    }),
    insurance: Joi.object().optional().messages({
        "string.empty": `insurance Info cannot be empty`,
        "any.required": `insurance Info is required`,
    }),
    leaseMonthToMonth: Joi.string().required().messages({
        "string.empty": `Lease Month To Month cannot be empty`,
        "any.required": `Lease Month To Month is required`,
    }),
    leaseDocuments: Joi.array().optional().messages({
        "string.empty": `leaseDocuments cannot be empty`,
        "any.required": `leaseDocuments is required`,
    }),
    // automaticLateFees: Joi.boolean().required().messages({
    //     "string.empty": `Automatic Late Fees cannot be empty`,
    //     "any.required": `Automatic Late Fees is required`,
    // }),
    // automaticLateFeesType: Joi.string().required().messages({
    //     "string.empty": `Automatic Late Fees Type cannot be empty`,
    //     "any.required": `Automatic Late Fees Type is required`,
    // }),
    // lateFeesType: Joi.string().required().messages({
    //     "string.empty": `Late Fees Type cannot be empty`,
    //     "any.required": `Late Fees Type is required`,
    // }),
    // lateFeesSetting: Joi.object().optional().messages({
    //     "string.empty": `Late Fees Setting cannot be empty`,
    //     "any.required": `Late Fees Setting is required`,
    // }),
});

const requestSchema = Joi.object({
    type: Joi.string().required().messages({
        "string.empty": `Request Type cannot be empty`,
        "any.required": `Request Type required`,
    }),
    categoryId: Joi.string().required().messages({
        "string.empty": `Category cannot be empty`,
        "any.required": `Category is required`,
    }),


    subCategoryId: Joi.string().required().messages({
        "string.empty": `Sub Category cannot be empty`,
        "any.required": `Sub Category is required`,
    }),
    issueId: Joi.string().required().messages({
        "string.empty": `Issue cannot be empty`,
        "any.required": `Issue is required`,
    }),
    subIssueId: Joi.string().required().messages({
        "string.empty": `Sub Issue cannot be empty`,
        "any.required": `Sub Issue is required`,
    }),
    createdBy: Joi.string().required().messages({
        "string.empty": `Tenant cannot be empty`,
        "any.required": `Tenant is required`,
    }),
    issueTitle: Joi.string().required().messages({
        "string.empty": `Issue Title cannot be empty`,
        "any.required": `Issue Title is required`,
    }),
    issueDetail: Joi.string().required().messages({
        "string.empty": `Issue Detail cannot be empty`,
        "any.required": `Issue Detail is required`,
    }),
    requestPriority: Joi.string().required().messages({
        "string.empty": `Request Priority cannot be empty`,
        "any.required": `Request Priority required`,
    }),
    issuePhoto: Joi.array().optional().messages({
        "string.empty": `issuePhoto cannot be empty`,
        "any.required": `issuePhoto name required`,
    }),
    isShare: Joi.boolean().required().messages({
        "string.empty": `Is Share cannot be empty`,
        "any.required": `Is Share is required`,
    }),
    authorizationCode: Joi.string().required().messages({
        "string.empty": `Authorization Code cannot be empty`,
        "any.required": `Authorization Code is required`,
    }),
    availableDates: Joi.array().optional().messages({
        "string.empty": `Available Dates cannot be empty`,
        "any.required": `Available Dates name required`,
    }),
    pets: Joi.object().required().messages({
        "string.empty": `Pets cannot be empty`,
        "any.required": `Pets is required`,
    }),
    property: Joi.string().required().messages({
        "string.empty": `Property Ref cannot be empty`,
        "any.required": `Property Ref is required`,
    }),
    tenant: Joi.string().required().messages({
        "string.empty": `Tenant Ref cannot be empty`,
        "any.required": `Tenant Ref is required`,
    }),
    assignee: Joi.string().required().messages({
        "string.empty": `Assignee Ref cannot be empty`,
        "any.required": `Assignee Ref is required`,
    }),
    // timeframe: Joi.object().optional().messages({
    //     "string.empty": `Time frame cannot be empty`,
    //     "any.required": `Time frame is required`,
    // }),
    materials: Joi.array().required().messages({
        "string.empty": `Materials be empty`,
        "any.required": `Materials required`,
    }),
    status: Joi.string().required().messages({
        "string.empty": `Status cannot be empty`,
        "any.required": `Status is required`,
    }),
});

const verifyEmailSchema = Joi.object({
    verifyEmailToken: Joi.string().required().messages({
        "string.empty": `Token cannot be empty`,
        "any.required": `Token is required`,
    })
});

const aplicationSchema = Joi.object({
    createdBy: Joi.string().required().messages({
        'string.empty': `Created By cannot be empty`,
        'any.required': `Created By is required`,
    }),
    property: Joi.string().required().messages({
        'string.empty': `Property cannot be empty`,
        'any.required': `Property is required`,
    }),
    firstName: Joi.string().required().messages({
        'string.empty': `First name cannot be empty`,
        'any.required': `First Name is required`,
    }),
    lastName: Joi.string().required().messages({
        'string.empty': `Last name cannot be empty`,
        'any.required': `Last name is required`,
    }),
    middleName: Joi.string(),
    displayAsCompany: Joi.boolean(),
    companyName: Joi.string(),
    dateOfBirth: Joi.string().required().messages({
        'string.empty': `DOB cannot be empty`,
        'any.required': `DOB is required`,
    }),
    ssn: Joi.string(),
    gender: Joi.string(),
    status: Joi.string(),
    email: Joi.string().required().messages({
        'string.empty': `Email cannot be empty`,
        'any.required': `Email is required`,
    }),
    phone: Joi.string().required().messages({
        'string.empty': `Phone cannot be empty`,
        'any.required': `Phone is required`,
    }),
    driverLicense: Joi.string(),
    driverLicenseState: Joi.string(),
    moveInDate: Joi.string(),
    bio: Joi.string(),
    vehicle: Joi.array(),
    pets: Joi.array(),
    additionalOccupants: Joi.array(),
    rentalHistory: Joi.array(),
    employmentHistory: Joi.array(),
    additionalIncomes: Joi.array(),
    emergencyContacts: Joi.array(),
    references: Joi.array(),
    applicantPhoto: Joi.string().optional()
})

const reminderSchema = Joi.object({
    categoryId: Joi.string().required().messages({
        "string.empty": `Category cannot be empty`,
        "any.required": `Category is required`,
    }),
    subCategoryId: Joi.string().required().messages({
        "string.empty": `Sub Category cannot be empty`,
        "any.required": `Sub Category is required`,
    }),
    issueId: Joi.string().required().messages({
        "string.empty": `Issue cannot be empty`,
        "any.required": `Issue is required`,
    }),
    subIssueId: Joi.string().required().messages({
        "string.empty": `Sub Issue cannot be empty`,
        "any.required": `Sub Issue is required`,
    }),
    createdBy: Joi.string().required().messages({
        "string.empty": `Tenant cannot be empty`,
        "any.required": `Tenant is required`,
    }),
    // title: Joi.string().required().messages({
    //     'string.empty': `Title cannot be empty`,
    //     'any.required': `title is required`,
    // }),
    property: Joi.string().required().messages({
        'string.empty': `Property cannot be empty`,
        'any.required': `Property is required`,
    }),
    priority: Joi.string().required().messages({
        'string.empty': `Priority cannot be empty`,
        'any.required': `Priority is required`,
    }),
    nextService: Joi.string().required().messages({
        'string.empty': `Next service cannot be empty`,
        'any.required': `Next service is required`,
    }),
    schedule: Joi.string().required().messages({
        'string.empty': `Schedule cannot be empty`,
        'any.required': `Schedule is required`,
    }),
    daysBefore: Joi.string(),
    detail: Joi.string(),
})
const taskSchema = Joi.object({
    createdBy: Joi.string().required().messages({
        "string.empty": `Created By cannot be empty`,
        "any.required": `Created By is required`,
    }),
    property: Joi.string().required().messages({
        'string.empty': `Property cannot be empty`,
        'any.required': `Property is required`,
    }),
    dateTime: Joi.string().required().messages({
        'string.empty': `Date Time cannot be empty`,
        'any.required': `Date Time is required`,
    }),
    taskDetail: Joi.string().required().messages({
        'string.empty': `Task detail cannot be empty`,
        'any.required': `Task detail is required`,
    }),
    isRecurring: Joi.boolean(),
    recurringFrequency: Joi.string(),
})

const accountingSchema = Joi.object({
    categoryId: Joi.string().required().messages({
        "string.empty": `Category cannot be empty`,
        "any.required": `Category is required`,
    }),
    // subCategoryId: Joi.string().required().messages({
    //     "string.empty": `Sub Category cannot be empty`,
    //     "any.required": `Sub Category is required`,
    // }),
    createdBy: Joi.string().required().messages({
        "string.empty": `Created By cannot be empty`,
        "any.required": `Created By is required`,
    }),
    dueOn: Joi.string(),
    amount: Joi.string(),
    payer: Joi.string().required().messages({
      'string.empty': `payer cannot be empty`,
      'any.required': `payer is required`,
    }),
    lease: Joi.string(),
    details: Joi.string().required().messages({
      'string.empty': `details cannot be empty`,
      'any.required': `details is required`,
    }),
    type: Joi.string().required().messages({
      'string.empty': `type cannot be empty`,
      'any.required': `type is required`,
    }),
    accountingType: Joi.string().required().messages({
      'string.empty': `Accounting Type cannot be empty`,
      'any.required': `Accounting Type is required`,
    }),
    transactionType: Joi.string().required().messages({
        'string.empty': `Transaction Type cannot be empty`,
        'any.required': `Transaction Type is required`,
      }),
    startDate: Joi.string(),
    endDate: Joi.string(),
    frequency: Joi.string(),
    files: Joi.array().optional().messages({
        "string.empty": `files cannot be empty`,
        "any.required": `files name required`,
    }),
  })

/**
 * wrap all validation schemas with validate object
 */
module.exports = {
    registerUserSchema,
    verifyEmailSchema,
    requestSchema,
    issueSchema,
    propertySchema,
    planSchema,
    contactSchema,
    listingSchema,
    leaseSchema,
    aplicationSchema,
    reminderSchema,
    taskSchema,
    accountingSchema,
    updateUserSchema
};
