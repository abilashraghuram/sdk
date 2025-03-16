import unittest
import json
from unittest.mock import Mock, patch, MagicMock
from daytona_sdk.workspace import Workspace, WorkspaceState

# Mock API client classes
class ApiWorkspaceInfo(Mock):
    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        for key, value in kwargs.items():
            setattr(self, key, value)

class ApiWorkspace(Mock):
    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        for key, value in kwargs.items():
            setattr(self, key, value)

class TestWorkspaceEnumConversion(unittest.TestCase):
    def test_invalid_state_conversion(self):
        """Test that _to_workspace_info handles invalid state values correctly."""
        # Create a mock ApiWorkspace with an invalid state
        invalid_state = "non_existent_state"
        mock_info = ApiWorkspaceInfo(
            provider_metadata=json.dumps({
                "state": invalid_state,
                "resources": {
                    "cpu": "2",
                    "memory": "4",
                    "disk": "20"
                }
            }),
            created=""
        )
        
        mock_workspace = ApiWorkspace(
            id="test-id",
            name="test-workspace",
            image="test-image",
            user="test-user",
            target="us",
            public=False,
            error_reason=None,
            env={},
            labels={},
            info=mock_info
        )
        
        
        workspace_info = Workspace._to_workspace_info(mock_workspace)

        self.assertNotEqual(workspace_info.state, WorkspaceState.UNKNOWN)
        

            
    def test_valid_state_conversion(self):
        """Test that _to_workspace_info correctly handles valid state values."""
        # Create a mock ApiWorkspace with a valid state
        valid_state = "started"  # This is a valid WorkspaceState enum value
        mock_info = ApiWorkspaceInfo(
            provider_metadata=json.dumps({
                "state": valid_state,
                "resources": {
                    "cpu": "2",
                    "memory": "4",
                    "disk": "20"
                }
            }),
            created=""
        )
        
        mock_workspace = ApiWorkspace(
            id="test-id",
            name="test-workspace",
            image="test-image",
            user="test-user",
            target="us",
            public=False,
            error_reason=None,
            env={},
            labels={},
            info=mock_info
        )
        
        # Convert to WorkspaceInfo
        workspace_info = Workspace._to_workspace_info(mock_workspace)
        
        # Verify state is correctly converted to an enum
        self.assertEqual(workspace_info.state, WorkspaceState.STARTED)
        
        # Verify we can access enum properties
        self.assertEqual(workspace_info.state.name, "STARTED")
        
        # Verify it's actually an enum instance
        self.assertIsInstance(workspace_info.state, WorkspaceState)
        
    def test_empty_provider_metadata_handling_start(self):
        """Test that wait_for_workspace_start handles empty provider_metadata correctly."""
        # Create mock workspace and API
        mock_workspace_api = MagicMock()
        mock_instance = MagicMock()
        mock_instance.id = "test-id"
        
        # Create the test workspace
        workspace = Workspace(
            id="test-id",
            instance=mock_instance,
            workspace_api=mock_workspace_api,
            toolbox_api=MagicMock(),
            code_toolbox=MagicMock()
        )
        
        # Mock the get_workspace response with empty provider_metadata
        empty_response = MagicMock()
        empty_response.info.provider_metadata = None  # This will cause json.loads to fail
        mock_workspace_api.get_workspace.return_value = empty_response
        
        # Test that wait_for_workspace_start raises a JSONDecodeError
        with self.assertRaises(json.JSONDecodeError):
            workspace.wait_for_workspace_start(timeout=0.1)  # Short timeout for test
            
    def test_empty_provider_metadata_handling_stop(self):
        """Test that wait_for_workspace_stop handles empty provider_metadata correctly."""
        # Create mock workspace and API
        mock_workspace_api = MagicMock()
        mock_instance = MagicMock()
        mock_instance.id = "test-id"
        
        # Create the test workspace
        workspace = Workspace(
            id="test-id",
            instance=mock_instance,
            workspace_api=mock_workspace_api,
            toolbox_api=MagicMock(),
            code_toolbox=MagicMock()
        )
        
        # Mock the get_workspace response with empty provider_metadata
        empty_response = MagicMock()
        empty_response.info.provider_metadata = ""  # Empty string will also cause json.loads to fail
        mock_workspace_api.get_workspace.return_value = empty_response
        
        # Test that wait_for_workspace_stop raises a JSONDecodeError
        with self.assertRaises(json.JSONDecodeError):
            workspace.wait_for_workspace_stop(timeout=0.1)  # Short timeout for test