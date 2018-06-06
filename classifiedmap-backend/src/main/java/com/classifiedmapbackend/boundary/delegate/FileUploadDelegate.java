package com.classifiedmapbackend.boundary.delegate;

import com.classifiedmapbackend.control.storage.StorageService;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.tomcat.util.codec.binary.Base64;
import org.springframework.boot.configurationprocessor.json.JSONObject;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestOperations;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;

import javax.inject.Inject;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Service
public class FileUploadDelegate {
    @Inject
    private StorageService storageService;

    private final String URI = "xxx";
    private final String plainCreds = "xxx";
    private final byte[] plainCredsBytes = plainCreds.getBytes();
    private final byte[] base64CredsBytes = Base64.encodeBase64(plainCredsBytes);
    private final String base64Creds = new String(base64CredsBytes);
    private RestTemplate restTemplate = new RestTemplate();

    public void saveImage(MultipartFile file, String userId, String classifiedId) {
        storageService.store(file, userId, classifiedId);
    }

    public List<String> listUploadedFilesForGivenClassified(String userId, String classifiedId) {
        return new ArrayList<>();
    }

    public Resource getImageAsResource(String userId, String classifiedId, String filename) {
        return null;
    }

    public JsonNode getFilesLink(String classifiedId) throws IOException {
        HttpHeaders headers = new HttpHeaders();
        headers.add("Authorization", "Basic " + base64Creds);
        HttpEntity<String> request = new HttpEntity<String>(headers);
        ObjectMapper mapper = new ObjectMapper();
        return mapper.readTree(restTemplate.exchange(URI, HttpMethod.GET, request, String.class, classifiedId).getBody());
    }
}
