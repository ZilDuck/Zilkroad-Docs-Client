<!-- This layout inherits from `routes/__layout-kit-docs.svelte` -->
<!-- Learn more: https://kit.svelte.dev/docs/layouts#named-layouts-inheritance-chains -->
<script>
import '@docsearch/css'; // Must come first.
import '@svelteness/kit-docs/client/styles/docsearch.css';
import { Algolia } from '@svelteness/kit-docs/client/algolia';
</script>

<Algolia
apiKey="599cec31baffa4868cae4e79f180729b"
appId="R2IYF7ETH7"
indexName="docsearch"
placeholder="Search documentation"
slot="search"
/>

<slot />
