//import { CtaTypeEnum } from "@prisma/client";

export type ValidationErrors = Record<string, string | undefined>;

export type ValidationResult = {
    valid: boolean;
    errors: ValidationErrors;
};

export const validateBasicInfo = (data: {
    webinarName?: string;
    description?: string;
    date?: Date;
    time?: string;
    timeFormat?: "AM" | "PM";
}): ValidationResult => {
    const errors: ValidationErrors = {};
    
    if (!data.webinarName?.trim()) {
        errors.webinarName = 'Webinar name is required';
    }

    if (!data.description?.trim()) {
        errors.description = 'Description is required';
    }

    if (!data.date) {
        errors.date = 'Date is required';
    }

    if (!data.time) {
        errors.time = 'Time is required';
    } else {
        // Validate timeformat (HH:MM)
        const timeRegex = /^(0[1-9]|1[0-2]):([0-5][0-9])$/;
        if (!timeRegex.test(data.time)) {
            errors.time = 'Time must be in HH:MM format (e.g., 10:30)';
        }
    }

    return {
        valid: Object.keys(errors).length === 0,
        errors,
    }

}

export const validateCTA = (data: {
    ctaLabel?: string;
    tags?: string[];
    ctaType?: string;
    aiAgent?: string;
}): ValidationResult => {     
    const errors: ValidationErrors = {};

    if (!data.ctaLabel?.trim()) {
        errors.ctaLabel = 'CTA label is required';
    }

    if (!data.ctaType) {
        errors.ctaType = 'CTA type is required';
    }

    if (data.ctaType === 'AI_AGENT' && !data.aiAgent?.trim()) {
        errors.aiAgent = 'AI agent is required';
    }

    return {
        valid: Object.keys(errors).length === 0,
        errors,
    }
}

export const validateAdditionalInfo = (data: {
    lockChat?: boolean;
    couponCode?: string;
    couponEnabled?: boolean;
}): ValidationResult => {
    const errors: ValidationErrors = {};

    if (data.couponEnabled && !data.couponCode?.trim()) {
        errors.couponCode = 'Coupon code is required when coupon is enabled';
    }

    return {
        valid: Object.keys(errors).length === 0,
        errors,
    }
}
