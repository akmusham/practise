echo "detecting channel manager url"
response=$(curl -s http://localhost:4040/api/tunnels)
export SERVICE_URL=$(echo ${response} | jq -r '.tunnels[1].public_url')
echo "detected url ${SERVICE_URL}"

echo ""
echo "starting webapp"
npm start
