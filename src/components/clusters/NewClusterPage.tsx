import React from 'react';
import { PageSectionVariants, TextContent, Text } from '@patternfly/react-core';
import PageSection from '../ui/PageSection';
import { AlertsContextProvider } from '../AlertsContextProvider';
import ClusterBreadcrumbs from './ClusterBreadcrumbs';
import { ClusterDefaultConfigurationProvider } from '../clusterConfiguration/ClusterDefaultConfigurationContext';
import NewClusterWizard from '../clusterWizard/NewClusterWizard';

const NewClusterPage: React.FC = () => {
  return (
    <AlertsContextProvider>
      <ClusterDefaultConfigurationProvider>
        <ClusterBreadcrumbs clusterName="New cluster" />
        <PageSection variant={PageSectionVariants.light}>
          <TextContent>
            <Text component="h1">Install OpenShift on Bare Metal with the Assisted Installer</Text>
          </TextContent>
        </PageSection>
        <PageSection variant={PageSectionVariants.light} isFilled>
          <NewClusterWizard />
        </PageSection>
      </ClusterDefaultConfigurationProvider>
    </AlertsContextProvider>
  );
};

export default NewClusterPage;
