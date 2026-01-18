'use client';
import React from 'react';
import { Footer } from '../../components/Footer';
import { toolIdToSlug } from '../../components/utils/slugs';

export const FooterWrapper = () => {
    return (
        <Footer setActiveTool={(toolId) => {
            window.location.href = toolIdToSlug(toolId);
        }} />
    );
};
