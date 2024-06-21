export default function validateIpAddress(ipAddress) {
    const ipRegex =
        /\b((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])\b/;
    return ipRegex.test(ipAddress);
}