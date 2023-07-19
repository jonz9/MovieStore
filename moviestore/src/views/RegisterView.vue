<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import { useStore } from '../stores';
import { auth, firestore } from "../firebase";
import { getDoc, doc } from "@firebase/firestore";

</script>