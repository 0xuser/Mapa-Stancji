package com.classifiedmapbackend.boundary.delegate;

import com.classifiedmapbackend.control.storage.StorageService;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.inject.Inject;
import java.util.ArrayList;
import java.util.List;

@Service
public class FileUploadDelegate {
    @Inject
    private StorageService storageService;

    public void saveImage(MultipartFile file, String userId, String classifiedId) {
    }

    public List<String> listUploadedFilesForGivenClassified(String userId, String classifiedId) {
        return new ArrayList<>();
    }

    public Resource getImageAsResource(String userId, String classifiedId, String filename) {
        return null;
    }
}
