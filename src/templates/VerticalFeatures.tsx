import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Frequently Asked Questions"
    description="FAQ on Automation and AI."
  >
    <VerticalFeatureRow
      title="What are the benefits of automating invoice processing, as described in the Esker materials?"
      description="The combination of invoice processing solutions like Esker and Python automation offers several key benefits. These include optimizing efficiency by eliminating manual data entry and intervention through autonomous browser interactions and intelligent automation frameworks.
Accuracy is improved through advanced data pre-processing and validation mechanisms, and Scalability is achieved through iterative batch processing of multiple invoices."
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="How does the Esker invoice processing solution utilize AI technologies like Large Language Models (LLMs)?"
      description="The Esker invoice processing solution leverages LLMs in several ways to enhance its automation capabilities. LLMs are integrated within Python-based workflows to enable more intelligent automation of mouse clicks and keyboard inputs, suggesting a context-aware understanding of the user interface.
Furthermore, automated PDF management with LLM-powered accurate labeling with key metadata information for quick document retrieval, ultimately leading to significant cost savings and increased productivity by drastically reducing processing time per invoice.
"
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Can you describe the general workflow of the automated invoice processing by Esker based on the
provided diagram and text?"
      description="The automated invoice processing workflow by Esker begins with Data Ingestion from a source, likely the Esker application. This data then moves through a Data Processing Pipeline where it undergoes format standardization for type and datetime conformity.
Finally, an Automated Iterative Process takes place, involving automated invoice retrieval and storage. This step utilizes metadata tagging for PDF files, incorporating the invoice number, vendor name, and posting date for enhanced searchability and to create an audit trail.
This entire automated process significantly reduces execution time compared to manual processing.
"
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
