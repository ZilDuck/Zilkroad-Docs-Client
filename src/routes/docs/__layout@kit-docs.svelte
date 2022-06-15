<!-- This layout inherits from `routes/__layout-kit-docs.svelte` -->
<!-- Learn more: https://kit.svelte.dev/docs/layouts#named-layouts-inheritance-chains -->
<script>
import '@docsearch/css'; // Must come first.
import '@svelteness/kit-docs/client/styles/docsearch.css';
import { Algolia } from '@svelteness/kit-docs/client/algolia';
</script>

<Algolia
    apiKey="54f044bd245de2fdb68c4160e954e2a8"
    appId="O8DLGV1DG9"
    indexName="testnet-zilkroad"
    placeholder="Search documentation"
    slot="search"
/>

<slot />
