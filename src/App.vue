<template>
    <describo-crate-builder :crate="data.crate" :profile="data.profile" />
</template>

<script setup>
import { reactive } from "vue";

const data = reactive({
    crate: {
        "@context": [
            "https://w3id.org/ro/crate/1.1/context",
            { "@vocab": "http://schema.org/" },
            { txc: { "@id": "http://purl.archive.org/textcommons/terms#" } },
            { "@base": null },
        ],
        "@graph": [
            {
                "@id": "ro-crate-metadata.json",
                "@type": "CreativeWork",
                conformsTo: { "@id": "https://w3id.org/ro/crate/1.1" },
                about: { "@id": "./" },
            },
            {
                "@id": "./",
                "@type": ["Dataset"],
                licence: { "@id": "LICENCE" },
            },
            {
                "@id": "LICENCE",
                "@type": ["File", "DataReuseLicence"],
            },
        ],
    },
    profile: {
        metadata: {
            name: "Describo Test Profile without groups",
            description: "A profile with entries for each of the supported datatypes",
            version: 0.1,
            warnMissingProperty: true,
        },
        classes: {
            Dataset: {
                definition: "override",
                subClassOf: [],
                inputs: [
                    {
                        id: "https://schema.org/date",
                        name: "date",
                        label: "Date",
                        help: "Attach a date",
                        type: ["Geo"],
                        required: true,
                        multiple: false,
                    },
                ],
            },
            Person: {
                definition: "inherit",
                subClassOf: [],
                inputs: [
                    {
                        id: "https://schema.org/name",
                        name: "name",
                        label: "name",
                        help: "The name the person",
                        required: true,
                        multiple: false,
                        type: ["Text"],
                    },
                ],
            },
            Organisation: {
                definition: "override",
                subClassOf: [],
                inputs: [
                    {
                        id: "https://schema.org/name",
                        name: "name",
                        label: "name",
                        help: "The name of the organisation",
                        required: true,
                        multiple: false,
                        type: ["Text"],
                    },
                ],
            },
        },
    },
});
</script>
